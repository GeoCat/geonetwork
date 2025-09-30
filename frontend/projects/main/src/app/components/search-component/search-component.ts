import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
  OnInit,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { InputText } from 'primeng/inputtext';
import { InputGroup } from 'primeng/inputgroup';
import { InputGroupAddon } from 'primeng/inputgroupaddon';
import { Button } from 'primeng/button';
import { SearchStore } from '../../stores/store-search';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-component',
  standalone: true,
  imports: [FormsModule, InputText, InputGroup, InputGroupAddon, Button],
  templateUrl: './search-component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent implements OnInit {
  @Input() query = '';
  @Output() queryChange = new EventEmitter<string>();

  readonly store = inject(SearchStore);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  ngOnInit() {
    const urlQuery = this.route.snapshot.queryParamMap.get('q') || '';
    if (urlQuery) {
      this.query = urlQuery;
      this.queryChange.emit(urlQuery);
      this.store.searchWithPagination(urlQuery, 0, 10);
    }

    this.route.queryParamMap.subscribe((params) => {
      const newQuery = params.get('q') || '';
      if (newQuery !== this.query) {
        this.query = newQuery;
        this.queryChange.emit(newQuery);
        this.store.searchWithPagination(newQuery, 0, 10);
      }
    });
  }

  clearQuery() {
    this.query = '';
    this.queryChange.emit('');
    this.updateUrlAndSearch('');
  }

  onSearch() {
    const trimmedQuery = this.query.trim();
    this.updateUrlAndSearch(trimmedQuery);
  }

  onInput(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target?.value || '';
    this.query = value;
    this.queryChange.emit(value);

    const trimmedValue = value.trim();
    if (trimmedValue.length >= 2) {
      this.updateUrlAndSearch(trimmedValue);
    } else if (trimmedValue.length === 0) {
      this.updateUrlAndSearch('');
    }
  }

  private updateUrlAndSearch(query: string) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        q: query || null,
        page: null,
        size: null,
      },
      queryParamsHandling: 'merge',
    });

    this.store.searchWithPagination(query, 0, 10);
  }
}
