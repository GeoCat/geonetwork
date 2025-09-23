import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Result } from '../stores/result';

@Injectable()
export class SearchService {
  getByQuery(query: string): Observable<Result[]> {
    const mockResults: Result[] = [
      { id: '1', title: `Result for ${query} - 1`, description: 'Mock description 1' },
      { id: '2', title: `Result for ${query} - 2`, description: 'Mock description 2' }
    ];
    return of(mockResults);
  }
}
