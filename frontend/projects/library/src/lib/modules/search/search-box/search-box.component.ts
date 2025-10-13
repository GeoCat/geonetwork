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
import { ActivatedRoute, Router } from '@angular/router';
import { SearchStore } from '../search.store';

@Component({
  selector: 'app-search-component',
  standalone: true,
  imports: [FormsModule, InputText, InputGroup, InputGroupAddon, Button],
  templateUrl: './search-box.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBox implements OnInit {
  @Input() query = '';
  @Input() isHomepage: boolean = false;
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
    if (this.isHomepage) return;

    const target = event.target as HTMLInputElement;
    const value = target?.value || '';
    this.query = value;
    this.queryChange.emit(value);

    this.updateUrlAndSearch(value.trim());
  }

  onKeyDown(event: KeyboardEvent) {
    if (this.isHomepage && event.key === 'Enter') {
      this.onSearch();
    }
  }

  private updateUrlAndSearch(query: string) {
    if (this.isHomepage) {
      this.router.navigate(['/catalogue'], {
        queryParams: {
          q: query || null,
          page: null,
          size: null,
        },
        queryParamsHandling: 'merge',
      });
    } else {
      this.router.navigate([], {
        relativeTo: this.route,
        queryParams: {
          q: query || null,
          page: null,
          size: null,
        },
        queryParamsHandling: 'merge',
      });
    }

    this.store.searchWithPagination(query, 0, 10);
  }

}
