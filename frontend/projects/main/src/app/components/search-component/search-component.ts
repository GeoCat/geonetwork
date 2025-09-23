import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {InputText} from 'primeng/inputtext';
import {InputGroup} from 'primeng/inputgroup';
import {InputGroupAddon} from 'primeng/inputgroupaddon';
import {Button} from 'primeng/button';
import { SearchService } from 'gn4-api-client';

@Component({
  selector: 'app-search-component',
  standalone: true,
  imports: [CommonModule, FormsModule, InputText, InputGroup, InputGroupAddon, Button],
  templateUrl: './search-component.html',
})
export class SearchComponent {
  @Input() query = '';
  @Output() queryChange = new EventEmitter<string>();

  searchService = inject(SearchService);

  clearQuery() {
    this.query = '';
    this.queryChange.emit(this.query);
  }

  onSearch() {
    console.log('Search submitted:', this.query);
    this.searchService.search("{\"from\": 1, \"size\": 10}").subscribe(
      (response) => {
        console.log(response);
      }
    )
  }

    onInput(event: Event) {
        const target = event.target as HTMLInputElement;
        const value = target?.value || '';
        this.query = value;
        this.queryChange.emit(this.query);
    }

}
