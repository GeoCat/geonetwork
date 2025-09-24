
import { inject, Injectable } from '@angular/core';
import { Observable, of, map } from 'rxjs';
import { Result } from '../stores/result';
import { IndexRecord, elasticsearch } from 'gn-api-client';
import { SearchService as ApiSearchService } from 'gn4-api-client';
import { SearchTotalHits } from '../../../../gn-api-client/src/lib/elasticsearch/types';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  searchService: ApiSearchService = inject(ApiSearchService);

  // TODO: Here we can type object to Elasticsearch SearchResponse<IndexRecord>
  // We can discuss what to put in the state. Can be only an IndexRecord[]
  // and avoid to tight couple the state with ES response (we may use OGC API Records in the future)
  getByQuery(query: string): Observable<Result[]> {
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
        let numberOfResults: SearchTotalHits = response.hits.total as elasticsearch.SearchTotalHits;

        const results: Result[] = response.hits.hits.map((hit: any, index: number) => ({
          id: hit._id || `result-${index}`,
          title: (hit._source?.resourceTitleObject as any)?.[`default`] || `Result for ${query} - ${index + 1}`,
          description: (hit._source?.overview as any)?.[`default`] || 'Description from Elasticsearch'
        }));

        return results;
      })
    );
  }
}
