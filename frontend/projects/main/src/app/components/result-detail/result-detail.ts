import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { SearchService } from '../../services/search.service';
import {elasticsearch, IndexRecord} from 'gn-api-client';


@Component({
  selector: 'app-result-detail',
  standalone: true,
  imports: [CommonModule, ButtonModule, CardModule],
  templateUrl: './result-detail.html',

})
export class CatalogueDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private searchService = inject(SearchService);

  result = signal<elasticsearch.SearchHit<IndexRecord> | null >  (null);
  isLoading = signal(true);

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadResult(id);
    } else {
      this.isLoading.set(false);
    }
  }

  private loadResult(id: string) {
    this.searchService.getById(id).subscribe({
      next: (result) => {
        this.result.set(result);
        this.isLoading.set(false);
      },
      error: (error) => {
        console.error('Error loading result:', error);
        this.result.set(null);
        this.isLoading.set(false);
      }
    });
  }

  goBack() {
    const queryParams = history.state?.searchQuery ? { q: history.state.searchQuery } : {};
    this.router.navigate(['/catalogue'], { queryParams });
  }

}
