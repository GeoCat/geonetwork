import { Component, computed, inject, OnInit } from '@angular/core';
import { SearchStore } from 'gn-library';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {Accordion, AccordionContent, AccordionHeader, AccordionPanel} from 'primeng/accordion';
import { Checkbox } from 'primeng/checkbox';

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
  ]
})
export class FacetComponent implements OnInit {
  readonly searchStore = inject(SearchStore);

  get aggregations() {
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

  onFilterChange(groupKey: string, bucketKey: string, checked: boolean) {
    if (!this.selectedFilters[groupKey]) {
      this.selectedFilters[groupKey] = {};
    }
    this.selectedFilters[groupKey][bucketKey] = checked;
  }

  getSelected(groupKey: string, bucketKey: string): boolean {
    return !!this.selectedFilters?.[groupKey]?.[bucketKey];
  }

  setSelected(groupKey: string, bucketKey: string, value: boolean) {
    if (!this.selectedFilters[groupKey]) {
      this.selectedFilters[groupKey] = {};
    }
    this.selectedFilters[groupKey][bucketKey] = value;
    this.onFilterChange(groupKey, bucketKey, value);
  }


  get filterGroups(): { key: string; label: string; buckets: BucketUI[] }[] {
    const aggs = this.aggregations as Record<string, AggregationsAggregate>;
    if (!aggs || Object.keys(aggs).length === 0) {
      return [];
    }

    return Object.keys(aggs).map((key) => {
      const raw = aggs[key];
      const buckets = this.getBuckets(raw) || [];

      const mapped: BucketUI[] = buckets.map((b: any) => ({
        key: String(b.key),
        name: String(b.key),
        count: b.doc_count ?? 0,
      }));

      return {
        key,
        label: key,
        buckets: mapped,
      };
    });
  }

  ngOnInit(): void {

  }
}
