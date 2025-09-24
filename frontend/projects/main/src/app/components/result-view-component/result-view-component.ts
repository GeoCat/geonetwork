import { Component, signal, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { DataView } from 'primeng/dataview';
import { SelectButton } from 'primeng/selectbutton';
import { SearchStore } from '../../stores/store-search';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-result-view',
  standalone: true,
  imports: [DataView, ButtonModule, CommonModule, FormsModule, SelectButton],
  templateUrl: './result-view-component.html',
  styleUrls: ['./result-view-component.scss']
})
export class ResultViewComponent {
  layout: 'list' | 'grid' = 'list';
  options: ('list' | 'grid')[] = ['list', 'grid'];
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  readonly store = inject(SearchStore);

  get results() {
    return this.store.results();
  }

  get isLoading() {
    return this.store.isLoading();
  }

  viewDetails(id: string) {
    const currentQuery = this.route.snapshot.queryParamMap.get('q');
    this.router.navigate(['/catalogue/record/', id], {
      state: { searchQuery: currentQuery }
    });
  }


}
