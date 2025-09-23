import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from '../search-component/search-component';
import {FacetComponent} from '../facet-component/facet-component';
import {ResultViewComponent} from '../result-view-component/result-view-component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SearchComponent, FacetComponent, ResultViewComponent],
  templateUrl: './home-component.html',
})
export class HomeComponent {
  currentQuery = '';
}
