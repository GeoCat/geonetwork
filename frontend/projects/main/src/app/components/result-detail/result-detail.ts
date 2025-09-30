import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { SearchService } from 'gn-library';
import { elasticsearch, IndexRecord } from 'gn-api-client';

type ExtendedIndexRecord = IndexRecord & {
  cl_spatialRepresentationType?: {
    key: string;
    default?: string;
    langfre?: string;
    link?: string;
  }[];
};

@Component({
  selector: 'app-result-detail',
  standalone: true,
  imports: [CommonModule, ButtonModule, CardModule],
  templateUrl: './result-detail.html',
})
export class ResultDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private searchService = inject(SearchService);

  result = signal<elasticsearch.SearchHit<ExtendedIndexRecord> | null>(null);

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
      },
    });
  }

  goBack() {
    const queryParams = history.state?.searchQuery ? { q: history.state.searchQuery } : {};
    this.router.navigate(['/catalogue'], { queryParams });
  }

  get source(): any {
    return this.result()?.['_source'] ?? {};
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

  getAuthors(): any[] {
    const source = this.result()?._source as any;
    const contacts = source?.contactForResource || [];
    return contacts.filter((contact: any) => contact.role === 'author');
  }

  getOrgName(): string {
    return (this.result()?.['_source'] as any)?.OrgObject?.default ?? '';
  }

  getContacts(): any[] {
    const source = this.result()?._source as any;
    const contacts = source?.contact || [];
    return contacts.filter((contact: any) => contact.role === 'pointOfContact');
  }

  getLineage(): string {
    return (this.result()?.['_source'] as any)?.lineageObject?.default ?? '';
  }

  getConstraints(): { default: string; link: string } {
    const constraint = (this.result()?.['_source'] as any)
      ?.MD_LegalConstraintsUseLimitationObject?.[0];
    return {
      default: constraint?.default ?? '',
      link: constraint?.link ?? '',
    };
  }

  getUseConstraint(): { default: string; link: string } {
    const constraint = (this.result()?.['_source'] as any)?.cl_useConstraints?.[0];
    return {
      default: constraint?.default ?? '',
      link: constraint?.link ?? '',
    };
  }

  getOtherConstraint(): { default: string; link: string } {
    const constraint = (this.result()?.['_source'] as any)
      ?.MD_LegalConstraintsOtherConstraintsObject?.[0];
    return {
      default: constraint?.default ?? '',
      link: constraint?.link ?? '',
    };
  }
}
