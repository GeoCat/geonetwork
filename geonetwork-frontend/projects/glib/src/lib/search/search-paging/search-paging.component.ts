import { Component } from '@angular/core';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { SearchBaseComponent } from '../search-base/search-base.component';

@Component({
  selector: 'g-search-paging',
  standalone: true,
  imports: [PaginatorModule],
  templateUrl: './search-paging.component.html',
})
export class SearchPagingComponent extends SearchBaseComponent {
  onPageChange($event: PaginatorState) {
    if (
      $event.first !== undefined &&
      $event.rows !== undefined &&
      !isNaN(Number($event.first)) &&
      !isNaN(Number($event.rows))
    ) {
      this.search.setPage($event.first, $event.rows);
    }
  }
}
