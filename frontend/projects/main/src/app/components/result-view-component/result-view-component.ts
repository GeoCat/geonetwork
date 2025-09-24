import { Component, signal, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { DataView } from 'primeng/dataview';
import { SelectButton } from 'primeng/selectbutton';
import { SearchStore } from '../../stores/store-search';

@Component({
  selector: 'app-result-view',
  standalone: true,
  imports: [DataView, ButtonModule, CommonModule, FormsModule, SelectButton],
  templateUrl: './result-view-component.html',
  styleUrls: ['./result-view-component.scss']
})
export class ResultViewComponent {
  layout: 'list' | 'grid' = 'grid';
  options: ('list' | 'grid')[] = ['list', 'grid'];

  readonly store = inject(SearchStore);

  get results() {
    return this.store.results();
  }

  get isLoading() {
    return this.store.isLoading();
  }
}
