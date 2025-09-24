
import { Component } from '@angular/core';
import { FacetComponent } from '../facet-component/facet-component';
import { ResultViewComponent } from '../result-view-component/result-view-component';
import { SearchComponent } from '../search-component/search-component';
import { SearchStore } from '../../stores/store-search';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-catalogue-component',
  imports: [
    FacetComponent,
    ResultViewComponent,
    SearchComponent
  ],
  standalone: true,
  templateUrl: './catalogue-component.html',
  styleUrl: './catalogue-component.scss',
  providers: [SearchStore, SearchService] // Add these providers
})
export class CatalogueComponent {
  currentQuery = '';
}
