import { Component, inject, OnInit } from '@angular/core';
import { SearchStore } from 'gn-library';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Accordion, AccordionContent, AccordionHeader, AccordionPanel } from 'primeng/accordion';
import { Checkbox } from 'primeng/checkbox';

interface BucketUI { key: string; name: string; count: number; }
interface AggregationBucket { key: string; doc_count: number; }
interface AggregationsAggregate { buckets: AggregationBucket[]; }

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

  // if searchStore.aggregations() is a signal or method, call it when updating
  get aggregations() {
    return this.searchStore.aggregations();
  }

  filterGroups: { key: string; label: string; buckets: BucketUI[] }[] = [];
  selectedFilters: Record<string, Record<string, boolean>> = {};

  getBuckets(agg: any) {
    return agg?.buckets || [];
  }

  // pure read-only getter for template
  getSelected(groupKey: string, bucketKey: string): boolean {
    return !!this.selectedFilters?.[groupKey]?.[bucketKey];
  }

  // write path that ensures nested object exists
  setSelected(groupKey: string, bucketKey: string, value: boolean) {
    if (!this.selectedFilters[groupKey]) {
      this.selectedFilters[groupKey] = {};
    }
    this.selectedFilters[groupKey][bucketKey] = value;
    // any additional handling on change:
    this.onFilterChange(groupKey, bucketKey, value);
  }

  onFilterChange(groupKey: string, bucketKey: string, checked: boolean) {
    // your existing side-effect when a filter changes
  }

  ngOnInit(): void {
    // initial attempt to populate (may be empty)
    this.updateFilterGroups();

    // If your SearchStore exposes an observable or a callback when aggregations change,
    // subscribe or hook into that and call updateFilterGroups() there.
    //
    // Example when searchStore exposes an observable `aggregations$`:
    // this.searchStore.aggregations$.subscribe(() => this.updateFilterGroups());
    //
    // If it exposes a signal-like API, create an effect that calls updateFilterGroups()
    // whenever aggregations change. The exact subscription depends on your SearchStore API.
  }

  // call this whenever aggregations become available/updated
  updateFilterGroups(): void {
    const aggs = this.aggregations as Record<string, AggregationsAggregate> | undefined;
    if (!aggs || Object.keys(aggs).length === 0) {
      this.filterGroups = [];
      return;
    }

    this.filterGroups = Object.keys(aggs).map((key) => {
      const raw = aggs[key];
      const buckets = this.getBuckets(raw) || [];

      const mapped: BucketUI[] = buckets.map((b: any) => ({
        key: String(b.key),
        name: String(b.key),
        count: b.doc_count ?? 0,
      }));

      return { key, label: key, buckets: mapped };
    });

    // ensure selectedFilters has entries for each group and bucket (no mutation during render)
    for (const group of this.filterGroups) {
      if (!this.selectedFilters[group.key]) {
        this.selectedFilters[group.key] = {};
      }
      for (const bucket of group.buckets) {
        if (this.selectedFilters[group.key][bucket.key] === undefined) {
          this.selectedFilters[group.key][bucket.key] = false;
        }
      }
    }
  }
}
