import { Component, computed, inject, OnInit } from '@angular/core';
import { SearchStore, AggregationTranslatePipe } from 'gn-library';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Accordion, AccordionContent, AccordionHeader, AccordionPanel } from 'primeng/accordion';
import { Checkbox } from 'primeng/checkbox';
import { TranslatePipe } from '@ngx-translate/core';
import { elasticsearch } from 'gn-api-client';

interface BucketUI {
  key: string;
  name: string;
  count: number;
}

interface AggregationBucket {
  key: string;
  doc_count: number;
}

interface AggregationsAggregate {
  buckets: AggregationBucket[];
}

@Component({
  selector: 'app-facet-component',
  templateUrl: './facet-component.html',
  styleUrl: './facet-component.scss',
  standalone: true,
  imports: [
    FormsModule,
    AccordionPanel,
    Accordion,
    CommonModule,
    Checkbox,
    AccordionHeader,
    AccordionContent,
    TranslatePipe,
    AggregationTranslatePipe,
  ],
})
export class FacetComponent implements OnInit {
  readonly searchStore = inject(SearchStore);

  get aggregations(): Record<string, elasticsearch.AggregationsAggregate> {
    return this.searchStore.aggregations();
  }
  aggregationKeys = computed(() => {
    // TODO: Get ordered keys from configuration
    return Object.keys(this.aggregations) || [];
  });
  aggregationList = computed(() => {
    return Object.values(this.aggregations) || [];
  });

  getBuckets(agg: any) {
    return agg?.buckets || [];
  }

  selectedFilters: Record<string, Record<string, boolean>> = {};

  getSelected(groupKey: string, bucketKey: string): boolean {
    return !!this.selectedFilters?.[groupKey]?.[bucketKey];
  }

  setSelected(groupKey: string, bucketKey: string, value: boolean) {
    if (!this.selectedFilters[groupKey]) {
      this.selectedFilters[groupKey] = {};
    }
    this.selectedFilters[groupKey][bucketKey] = value;

    if (value) {
      this.searchStore.addFilter(groupKey, bucketKey);
    } else {
      this.searchStore.removeFilter(groupKey, bucketKey);
    }
  }

  ngOnInit(): void {}
}
