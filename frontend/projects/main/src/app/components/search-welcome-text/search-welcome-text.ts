import { Component } from '@angular/core';
import { SearchBase } from 'gn-library';

@Component({
  selector: 'app-search-welcome-text',
  templateUrl: './search-welcome-text.html',
  standalone: true,
})
export class SearchWelcomeText extends SearchBase {
  override ngOnInit() {
    super.ngOnInit();
    // TODO: Remove, search can be done on search context load
    this.search.searchWithPagination('', 0, 0);
  }
}
