import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SidePanel } from '../side-panel/side-panel';
import { ResultViewComponent } from '../result-view-component/result-view-component';
import { SearchBox } from 'gn-library';
import { SearchStore } from 'gn-library';
import { SearchService } from 'gn-library';

@Component({
  selector: 'app-catalogue-component',
  imports: [SidePanel, ResultViewComponent, SearchBox],
  standalone: true,
  templateUrl: './catalogue-component.html',
  styleUrl: './catalogue-component.scss',
})
export class CatalogueComponent implements OnInit {
  currentQuery = '';
  private route = inject(ActivatedRoute);

  ngOnInit() {
    this.currentQuery = this.route.snapshot.queryParamMap.get('q') || '';
  }
}
