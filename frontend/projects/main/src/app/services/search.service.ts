import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Result } from '../stores/result';
import { IndexRecord, elasticsearch } from 'gn-api-client';
import { SearchService as ApiSearchService } from 'gn4-api-client';
import { SearchTotalHits } from '../../../../gn-api-client/src/lib/elasticsearch/types';

@Injectable()
export class SearchService {
  searchService: ApiSearchService = inject(ApiSearchService);

  // TODO: Here we can type object to Elasticsearch SearchResponse<IndexRecord>
  // We can discuss what to put in the state. Can be only an IndexRecord[]
  // and avoid to tight couple the state with ES response (we may use OGC API Records in the future)
  getByQuery(query: string): Observable<Result[]> {
    let searchRequest: elasticsearch.SearchRequest = {
      from: 0,
      size: 10,
    };

    this.searchService.search(searchRequest).subscribe((response: elasticsearch.SearchResponse<IndexRecord>) => {
      let numberOfResults: SearchTotalHits = response.hits.total as elasticsearch.SearchTotalHits;
      console.log(numberOfResults.value);
      console.log(response.hits.hits[0]._source?.resourceTitleObject);
    });

    const mockResults: Result[] = [
      { id: '1', title: `Result for ${query} - 1`, description: 'Mock description 1' },
      { id: '2', title: `Result for ${query} - 2`, description: 'Mock description 2' },
    ];
    return of(mockResults);
  }
}
