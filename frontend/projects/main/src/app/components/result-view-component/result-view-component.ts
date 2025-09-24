import { Component, inject, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { DataView } from 'primeng/dataview';
import { SelectButton } from 'primeng/selectbutton';
import { SearchStore } from '../../stores/store-search';
import { ActivatedRoute, Router } from '@angular/router';
import { Paginator } from 'primeng/paginator';

@Component({
  selector: 'app-result-view',
  standalone: true,
  imports: [DataView, ButtonModule, CommonModule, Paginator, FormsModule, SelectButton],
  templateUrl: './result-view-component.html',
  styleUrls: ['./result-view-component.scss']
})

export class ResultViewComponent implements OnInit {
  layout: 'list' | 'grid' = 'list';
  options: ('list' | 'grid')[] = ['list', 'grid'];
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  currentPage = 0;
  pageSize = 10;
  pageSizeOptions = [5, 10, 20, 50];

  readonly store = inject(SearchStore);

  get results() {
    return this.store.results();
  }

  get isLoading() {
    return this.store.isLoading();
  }

  get totalCount() {
    return this.store.totalCount();
  }

  viewDetails(id: string) {
    const currentQuery = this.route.snapshot.queryParamMap.get('q');
    this.router.navigate(['/catalogue/record/', id], {
      state: { searchQuery: currentQuery }
    });
  }

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      const page = params.get('page');
      const size = params.get('size');

      if (page) {
        this.currentPage = parseInt(page, 10);
      }
      if (size) {
        this.pageSize = parseInt(size, 10);
      }
    });
  }

  onPageChange(event: any) {
    this.currentPage = event.page;
    this.pageSize = event.rows;

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        page: this.currentPage > 0 ? this.currentPage : null,
        size: this.pageSize !== 10 ? this.pageSize : null
      },
      queryParamsHandling: 'merge'
    });

    const query = this.route.snapshot.queryParamMap.get('q') || '';
    this.store.searchWithPagination(query, this.currentPage, this.pageSize);
  }
}
