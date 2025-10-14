import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { elasticsearch, IndexRecord } from 'gn-api-client';
import { SearchService as ApiSearchService } from 'gn4-api-client';
import { APPLICATION_CONFIGURATION } from '../config/config.loader';
import { SearchRegistry, SearchStoreType, TRACK_TOTAL_HITS } from './search.store';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  // All searches running in current app.
  // Each search has its own context
  store: SearchRegistry = {};

  searchService: ApiSearchService = inject(ApiSearchService);

  uiConfiguration = inject(APPLICATION_CONFIGURATION).config;

  register(searchId: string, searchStore: SearchStoreType) {
    if (this.store[searchId]) {
      console.log(`Search ${searchId} already registered. Reusing it.`);
      // throw new Error(
      //   `Search ${searchId} already registered. Choose another search id.`
      // );
    }
    this.store[searchId] = searchStore;
  }

  getSearch(searchId: string): SearchStoreType {
    if (this.store[searchId]) {
      return this.store[searchId];
    } else {
      throw new Error(
        `Search ${searchId} not found. Available search contexts are: ${Object.keys(this.store).join(', ')}`,
      );
    }
  }

  buildQuery(query: string): elasticsearch.QueryDslQueryContainer {
    const filter = [
      {
        terms: {
          isTemplate: ['n'],
        },
      },
    ];
    const must: elasticsearch.QueryDslQueryContainer[] = [];
    if (query) {
      must.push({
        query_string: {
          query: query,
          default_operator: 'AND',
          fields: ['resourceTitleObject.*^5', 'any.*', 'uuid'],
        },
      });
    }
    const must_not: elasticsearch.QueryDslQueryContainer[] = [];
    const should: elasticsearch.QueryDslQueryContainer[] = [];
    return {
      bool: {
        must,
        must_not,
        should,
        filter,
      },
    };
  }

  buildAggregation(
    aggregationConfig: (string | Record<string, elasticsearch.AggregationsAggregationContainer>)[],
  ): Record<string, elasticsearch.AggregationsAggregationContainer> {
    const aggregations: Record<string, elasticsearch.AggregationsAggregationContainer> = {};

    for (const config of aggregationConfig) {
      if (typeof config === 'string') {
        aggregations[config] = {
          terms: {
            field: config,
            size: 10,
          },
        };
      } else if (typeof config === 'object' && config !== null) {
        Object.assign(aggregations, config);
      }
    }
    return aggregations;
  }

  buildIndexRecord(hit: elasticsearch.SearchHit<IndexRecord>): IndexRecord {
    // TODO: Handle multilingual fields
    return {
      ...hit._source,
      info: {
        _id: hit._id,
      },
    } as IndexRecord;
  }

  getByQuery(
    query: string,
    page: number = 0,
    size: number = 10,
  ): Observable<{
    results: IndexRecord[];
    aggregations: Record<string, elasticsearch.AggregationsAggregationContainer> | {};
    totalCount: number;
  }> {
    let searchRequest: elasticsearch.SearchRequest = {
      from: page * size,
      size: size,
      track_total_hits: TRACK_TOTAL_HITS,
      query: this.buildQuery(query),
      aggregations: this.buildAggregation(this.uiConfiguration?.apps?.search?.aggregations ?? []),
    };
    // TODO: add sorting
    // TODO: add _source fields

    return this.searchService.search(searchRequest).pipe(
      map(
        (
          response: elasticsearch.SearchResponse<
            IndexRecord,
            Record<string, elasticsearch.AggregationsAggregate>
          >,
        ) => {
          let totalCount = 0;
          if (typeof response.hits.total === 'number') {
            totalCount = response.hits.total;
          } else if (
            response.hits.total &&
            typeof response.hits.total === 'object' &&
            'value' in response.hits.total
          ) {
            totalCount = response.hits.total.value;
          }

          return {
            results: response.hits.hits.map((hit) => {
              return this.buildIndexRecord(hit);
            }),
            aggregations: response.aggregations ?? {},
            totalCount: totalCount,
          };
        },
      ),
    );
  }

  getById(id: string): Observable<IndexRecord | null> {
    let searchRequest: elasticsearch.SearchRequest = {
      query: {
        term: {
          _id: id,
        },
      },
      size: 1,
    };

    return this.searchService.search(searchRequest).pipe(
      map(
        (
          response: elasticsearch.SearchResponse<
            IndexRecord,
            Record<string, elasticsearch.AggregationsAggregate>
          >,
        ) => {
          const hits = response.hits.hits;

          if (hits.length === 0) {
            return null;
          }

          return this.buildIndexRecord(hits[0]);
        },
      ),
    );
  }
}
