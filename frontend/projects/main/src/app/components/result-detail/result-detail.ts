import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { SearchService } from '../../services/search.service';
import {elasticsearch, IndexRecord} from 'gn-api-client';


@Component({
  selector: 'app-result-detail',
  standalone: true,
  imports: [ButtonModule, CardModule],
  templateUrl: './result-detail.html',
})

export class ResultDetailComponent implements OnInit {
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

  getOverviewImage(): string | null {
    const overview = this.result()?._source?.overview;
    if (overview && overview.length > 0) {
      if (overview[0].data && overview[0].data.startsWith('data:image')) {
        return overview[0].data;
      }
      if (overview[0].url) {
        return overview[0].url;
      }
    }
    return null;
  }

  getOverviewImageName(): string {
    const overview = this.result()?._source?.overview;
    if (overview && overview.length > 0 && overview[0].nameObject) {
      return overview[0].nameObject['default'] || overview[0].nameObject['langfre'] || 'Image';
    }
    return 'Preview Image';
  }

}
