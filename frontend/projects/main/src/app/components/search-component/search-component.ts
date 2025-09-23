import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {InputText} from 'primeng/inputtext';
import {InputGroup} from 'primeng/inputgroup';
import {InputGroupAddon} from 'primeng/inputgroupaddon';
import {Button} from 'primeng/button';

@Component({
  selector: 'app-search-component',
  standalone: true,
  imports: [CommonModule, FormsModule, InputText, InputGroup, InputGroupAddon, Button],
  templateUrl: './search-component.html',
})
export class SearchComponent {
  @Input() query = '';
  @Output() queryChange = new EventEmitter<string>();


  clearQuery() {
    this.query = '';
    this.queryChange.emit(this.query);
  }

  onSearch() {
    console.log('Search submitted:', this.query);
  }

    onInput(event: Event) {
        const target = event.target as HTMLInputElement;
        const value = target?.value || '';
        this.query = value;
        this.queryChange.emit(this.query);
    }

}
