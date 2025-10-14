import { computed, inject } from '@angular/core';
import { debounceTime, distinctUntilChanged, pipe, switchMap, tap } from 'rxjs';
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { tapResponse } from '@ngrx/operators';
import { SearchService } from './search.service';
import { elasticsearch, IndexRecord } from 'gn-api-client';

export const DEFAULT_PAGE_SIZE = 10;

export const TRACK_TOTAL_HITS = true;

type searchState = {
  id: string;
  routing: boolean;
  searchQuery: string;
  results: elasticsearch.SearchHit<IndexRecord>[] | [];
  topFilter?: string;
  aggregationsConfig: (string | Record<string, elasticsearch.AggregationsAggregationContainer>)[];
  aggregations: Record<string, elasticsearch.AggregationsAggregate> | {};
  totalCount: number;
  isLoading: boolean;
  filter: { query: string; order: 'asc' | 'desc' };
  currentPage: number;
  pageSize: number;
};

const initialState: searchState = {
  id: 'default',
  routing: false,
  searchQuery: '',
  results: [],
  aggregationsConfig: [],
  aggregations: {},
  totalCount: 0,
  isLoading: false,
  filter: { query: '', order: 'asc' },
  currentPage: 0,
  pageSize: DEFAULT_PAGE_SIZE,
};

export const SearchStore = signalStore(
  withState(initialState),
  withComputed((store) => ({
    hasResults: computed(() => store.results() !== null && store.results()!.length > 0),
    isEmpty: computed(() => store.results() !== null && store.results()!.length === 0),
    totalPages: computed(() => Math.ceil(store.totalCount() / store.pageSize())),
  })),
  withMethods((store, searchService = inject(SearchService)) => ({
    init(
      searchId: string,
      aggregationsConfig: (
        | string
        | Record<string, elasticsearch.AggregationsAggregationContainer>
      )[],
      size: number,
      routing: boolean = false,
    ) {
      console.log(`Initializing search store with id: ${searchId}`);
      patchState(store, {
        id: searchId,
        aggregationsConfig,
        pageSize: size,
        routing: routing,
      });
    },
    loadByQuery: rxMethod<string>(
      pipe(
        debounceTime(300),
        distinctUntilChanged(),
        tap(() => patchState(store, { isLoading: true })),
        switchMap((query) => {
          patchState(store, {
            currentPage: 0,
            pageSize: 10,
            searchQuery: query,
          });

          return searchService.getByQuery(query, 0, 10).pipe(
            tapResponse({
              next: (response) =>
                patchState(store, {
                  results: response.results,
                  aggregations: response.aggregations || {},
                  totalCount: response.totalCount,
                }),
              error: console.error,
              finalize: () => patchState(store, { isLoading: false }),
            }),
          );
        }),
      ),
    ),

    loadByQueryWithPagination: rxMethod<{
      query: string;
      page: number;
      size: number;
    }>(
      pipe(
        debounceTime(300),
        distinctUntilChanged(),
        tap(() => patchState(store, { isLoading: true })),
        switchMap(({ query, page, size }) => {
          patchState(store, {
            currentPage: page,
            pageSize: size,
            searchQuery: query,
          });

          return searchService.getByQuery(query, page, size).pipe(
            tapResponse({
              next: (response) =>
                patchState(store, {
                  results: response.results,
                  aggregations: response.aggregations || {},
                  totalCount: response.totalCount,
                }),
              error: console.error,
              finalize: () => patchState(store, { isLoading: false }),
            }),
          );
        }),
      ),
    ),

    searchWithPagination(query: string, page: number = 0, size: number = 10): void {
      this.loadByQueryWithPagination({ query, page, size });
    },
  })),
);

export type SearchStoreType = InstanceType<typeof SearchStore>;

export interface SearchRegistry {
  [searchId: string]: SearchStoreType;
}
