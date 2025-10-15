import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { APPLICATION_CONFIGURATION, SearchStore } from 'gn-library';
import { elasticsearch } from 'gn-api-client';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-result-header',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonModule, TranslatePipe],
  templateUrl: './result-header.html',
  styleUrl: './result-header.scss',
})
export class ResultHeader {
  @Input() totalCount: number = 0;
  @Input() currentCount: number = 0;
  @Input() layout: 'list' | 'grid' = 'list';
  @Output() layoutChange = new EventEmitter<'list' | 'grid'>();

  topTabFilter = inject(APPLICATION_CONFIGURATION).config?.apps.search?.topTabFilter;

  readonly searchStore = inject(SearchStore);

  get getFilterBuckets(): elasticsearch.AggregationsStringTermsBucket[] | undefined {
    if (!this.topTabFilter) {
      return undefined;
    }
    const agg = (
      this.searchStore.aggregations() as Record<string, elasticsearch.AggregationsAggregate>
    )[this.topTabFilter];
    return (agg as any)?.buckets || [];
  }

  active: string | null = 'all';

  setActive(name: string): void {
    this.active = this.active === name ? null : name;
  }

  layoutOptions: ('list' | 'grid')[] = ['list', 'grid'];

  onLayoutChange(layout: any) {
    // Cast to the correct type to handle PrimeNG's type inference issue
    this.layoutChange.emit(layout as 'list' | 'grid');
  }
}
