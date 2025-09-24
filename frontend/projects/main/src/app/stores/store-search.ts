import { computed, inject } from '@angular/core';
import { debounceTime, distinctUntilChanged, pipe, switchMap, tap } from 'rxjs';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { tapResponse } from '@ngrx/operators';
import { SearchService } from '../services/search.service';
import {elasticsearch, IndexRecord} from 'gn-api-client';



type searchState = {
  searchQuery: string;
  results: elasticsearch.SearchHit<IndexRecord>[] | [];
  isLoading: boolean;
  filter: { query: string; order: 'asc' | 'desc' };
};

const initialState: searchState = {
  searchQuery: '',
  results: [],
  isLoading: false,
  filter: { query: '', order: 'asc' },
};

export const SearchStore = signalStore(
  withState(initialState),
  withMethods((store, searchService = inject(SearchService)) => ({
    updateQuery(query: string): void {
      patchState(store, (state) => ({ filter: { ...state.filter, query } }));
    },
    updateOrder(order: 'asc' | 'desc'): void {
      patchState(store, (state) => ({ filter: { ...state.filter, order } }));
    },
    loadByQuery: rxMethod<string>(
      pipe(
        debounceTime(300),
        distinctUntilChanged(),
        tap(() => patchState(store, { isLoading: true })),
        switchMap((query) => {
          return searchService.getByQuery(query).pipe(

            tapResponse({
              next: (results )=> patchState(store, { results }),
              error: console.error,
              finalize: () => patchState(store, { isLoading: false }),
            })
          );
        })
      )
    ),
  }))
);
