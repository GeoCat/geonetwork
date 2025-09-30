import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FacetComponent } from '../facet-component/facet-component';
import { ResultViewComponent } from '../result-view-component/result-view-component';
import { SearchComponent } from '../search-component/search-component';
import { SearchStore } from '../../stores/store-search';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-catalogue-component',
  imports: [FacetComponent, ResultViewComponent, SearchComponent],
  standalone: true,
  templateUrl: './catalogue-component.html',
  styleUrl: './catalogue-component.scss',
  providers: [SearchStore, SearchService],
})
export class CatalogueComponent implements OnInit {
  currentQuery = '';
  private route = inject(ActivatedRoute);

  ngOnInit() {
    this.currentQuery = this.route.snapshot.queryParamMap.get('q') || '';
  }
}
