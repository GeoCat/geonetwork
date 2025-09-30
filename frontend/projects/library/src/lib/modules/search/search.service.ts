import { inject, Injectable } from '@angular/core';
import { Observable, of, map } from 'rxjs';
import { IndexRecord, elasticsearch } from 'gn-api-client';
import { SearchService as ApiSearchService } from 'gn4-api-client';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  searchService: ApiSearchService = inject(ApiSearchService);

  getByQuery(
    query: string,
    page: number = 0,
    size: number = 10,
  ): Observable<{
    results: elasticsearch.SearchHit<IndexRecord>[];
    totalCount: number;
  }> {
    if (!query || !query.trim()) {
      return of({ results: [], totalCount: 0 });
    }

    let searchRequest: elasticsearch.SearchRequest = {
      from: page * size,
      size: size,
      query: {
        multi_match: {
          query: query.trim(),
          fields: ['resourceTitleObject.*', 'overview.*', '*'],
        },
      },
    };

    return this.searchService.search(searchRequest).pipe(
      map((response: elasticsearch.SearchResponse<IndexRecord>) => {
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
          results: response.hits.hits,
          totalCount: totalCount,
        };
      }),
    );
  }

  getById(id: string): Observable<elasticsearch.SearchHit<IndexRecord> | null> {
    let searchRequest: elasticsearch.SearchRequest = {
      query: {
        term: {
          _id: id,
        },
      },
      size: 1,
    };

    return this.searchService.search(searchRequest).pipe(
      map((response: elasticsearch.SearchResponse<IndexRecord>) => {
        const hits = response.hits.hits;

        if (hits.length === 0) {
          return null;
        }

        return hits[0];
      }),
    );
  }
}
