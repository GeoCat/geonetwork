import { Component } from '@angular/core';
import {FacetComponent} from "../facet-component/facet-component";
import {ResultViewComponent} from "../result-view-component/result-view-component";
import {SearchComponent} from "../search-component/search-component";

@Component({
  selector: 'app-catalogue-component',
    imports: [
        FacetComponent,
        ResultViewComponent,
        SearchComponent
    ],
standalone: true,
  templateUrl: './catalogue-component.html',
  styleUrl: './catalogue-component.scss'
})
export class CatalogueComponent {
  currentQuery = '';
}
