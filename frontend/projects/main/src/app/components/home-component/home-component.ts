import { CommonModule } from '@angular/common';
import { SearchComponent } from '../search-component/search-component';
import {FacetComponent} from '../facet-component/facet-component';
import {ResultViewComponent} from '../result-view-component/result-view-component';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { SearchStore } from '../../stores/store-search';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SearchComponent, FacetComponent, ResultViewComponent, JsonPipe],
  templateUrl: './home-component.html',
  providers: [SearchStore, SearchService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  readonly store = inject(SearchStore);
  currentQuery = '';

  ngOnInit() {
    this.store.loadByQuery('test');
  }
}
