
import {ChangeDetectionStrategy, Component, EventEmitter, inject, Input, Output} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {InputText} from 'primeng/inputtext';
import {InputGroup} from 'primeng/inputgroup';
import {InputGroupAddon} from 'primeng/inputgroupaddon';
import {Button} from 'primeng/button';
import { SearchStore } from '../../stores/store-search';

@Component({
  selector: 'app-search-component',
  standalone: true,
  imports: [CommonModule, FormsModule, InputText, InputGroup, InputGroupAddon, Button],
  templateUrl: './search-component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent {
  @Input() query = '';
  @Output() queryChange = new EventEmitter<string>();

  readonly store = inject(SearchStore);

  clearQuery() {
    this.query = '';
    this.queryChange.emit(this.query);
    this.store.loadByQuery('');
  }


  onInput(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target?.value || '';
    this.query = value;
    this.queryChange.emit(value);

    const trimmedValue = value.trim();
    if (trimmedValue.length >= 2) {
      this.store.loadByQuery(trimmedValue); // This has 300ms debouncing built-in
    } else if (trimmedValue.length === 0) {
      this.store.loadByQuery('');
    }
  }

  onSearch() {
    const trimmedQuery = this.query.trim();
    if (trimmedQuery.length >= 1) { // Allow single character search when explicitly clicked
      this.store.loadByQuery(trimmedQuery);
    }
  }
}
