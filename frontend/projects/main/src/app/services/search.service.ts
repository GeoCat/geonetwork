
import { inject, Injectable } from '@angular/core';
import { Observable, of, map } from 'rxjs';
import {IndexRecord, elasticsearch} from 'gn-api-client';
import { SearchService as ApiSearchService } from 'gn4-api-client';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  searchService: ApiSearchService = inject(ApiSearchService);

  // TODO: Here we can type object to Elasticsearch SearchResponse<IndexRecord>
  // We can discuss what to put in the state. Can be only an IndexRecord[]
  // and avoid to tight couple the state with ES response (we may use OGC API Records in the future)
  getByQuery(query: string): Observable<elasticsearch.SearchHit<IndexRecord>[]> {
    if (!query || !query.trim()) {
      return of([]);
    }

    let searchRequest: elasticsearch.SearchRequest = {
      from: 0,
      size: 100,
      query: {
        multi_match: {
          query: query.trim(),
          fields: ['resourceTitleObject.*', 'overview.*', '*']
        }
      }
    };

    return this.searchService.search(searchRequest).pipe(
      map((response: elasticsearch.SearchResponse<IndexRecord>) => {
        return response.hits.hits
      })
    );
  }
  getById(id: string): Observable<elasticsearch.SearchHit<IndexRecord> | null > {
    let searchRequest: elasticsearch.SearchRequest = {
      query: {
        term: {
          "_id": id
        }
      },
      size: 1
    };

    return this.searchService.search(searchRequest).pipe(
      map((response: elasticsearch.SearchResponse<IndexRecord>) => {
        const hits = response.hits.hits;

        if (hits.length === 0) {
          return null;
        }

        return hits[0];
      })
    );
  }

}
