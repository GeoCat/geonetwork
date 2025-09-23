import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Result } from '../stores/result';
import { IndexRecord} from 'gn-api-client';
import { SearchService as ApiSearchService } from 'gn4-api-client';

@Injectable()
export class SearchService {
  searchService: ApiSearchService = inject(ApiSearchService);

  // TODO: Here we can type object to Elasticsearch SearchResponse<IndexRecord>
  // We can discuss what to put in the state. Can be only an IndexRecord[]
  // and avoid to tight couple the state with ES response (we may use OGC API Records in the future)
  getByQuery(query: string): Observable<Result[]> {
    this.searchService.search("{\"from\": 1, \"size\": 10}").subscribe(
      (response) => {
        console.log(response);
      }
    )

    const mockResults: Result[] = [
      { id: '1', title: `Result for ${query} - 1`, description: 'Mock description 1' },
      { id: '2', title: `Result for ${query} - 2`, description: 'Mock description 2' }
    ];
    return of(mockResults);
  }
}
