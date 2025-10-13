import { Component, computed, inject, OnInit } from '@angular/core';
import { KeyValuePipe, JsonPipe } from '@angular/common';
import { SearchStore } from 'gn-library';
import { FormsModule } from '@angular/forms';
import { FloatLabel } from 'primeng/floatlabel';
import { TreeSelect } from 'primeng/treeselect';
import { NodeService } from '../../services/nodeservice.service';
import { CommonModule } from '@angular/common';
import { Accordion, AccordionContent, AccordionHeader, AccordionPanel } from 'primeng/accordion';
import {Checkbox} from 'primeng/checkbox';

interface Catalogue {
  name: string;
  key: string;
}

interface Theme {
  name: string;
  key: string;
}

interface Keyword {
  name: string;
  key: string;
}

interface Year {
  name: string;
  key: string;
}

interface resourceType {
  name: string;
  key: string;
}

interface Availability {
  name: string;
  key: string;
}

@Component({
  selector: 'app-facet-component',
  templateUrl: './facet-component.html',
  styleUrl: './facet-component.scss',
  standalone: true,
  imports: [ FormsModule, FloatLabel, TreeSelect, KeyValuePipe, JsonPipe, AccordionHeader, AccordionContent, AccordionPanel, Accordion, CommonModule, Checkbox],
  providers: [NodeService],
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

  nodes!: any[];
  selectedNodes: any;
  catalogues!: Catalogue[];
  inspireThemes!: Theme[];
  keywords!: Keyword[];
  years!: Year[];
  resourceTypes!: resourceType[];
  availabilities!: Availability[];
  selectedCatalogue!: Catalogue[];
  selectedTheme!: Theme[];
  selectedKeyword!: Keyword[];
  selectedYear!: Year[];
  selectedResourceType!: resourceType[];
  selectedAvailability!: Availability[];

  constructor(private nodeService: NodeService) {
    this.nodeService.getFiles().then((files) => (this.nodes = files));

    this.catalogues = [
      { name: 'Catalogue 1', key: '1' },
      { name: 'Catalogue 2', key: '2' },
      { name: 'Catalogue 3', key: '3' },
    ];

    this.inspireThemes = [
      { name: 'Theme 1', key: '1' },
      { name: 'Theme 2', key: '2' },
      { name: 'Theme 3', key: '3' },
      { name: 'Theme 4', key: '4' },
      { name: 'Theme 5', key: '5' },
      { name: 'Theme 6', key: '6' },
    ];

    this.keywords = [
      { name: 'Marine', key: 'marine' },
      { name: 'Ocean', key: 'ocean' },
      { name: 'Sea', key: 'sea' },
      { name: 'Rivers', key: 'rivers' },
      { name: 'Lakes', key: 'lakes' },
      { name: 'Coast', key: 'coast' },
      { name: 'Water', key: 'water' },
      { name: 'Wildlife', key: 'wildlife' },
      { name: 'Biodiversity', key: 'biodiversity' },
      { name: 'Ecosystem', key: 'ecosystem' },
      { name: 'Environment', key: 'environment' },
      { name: 'Conservation', key: 'conservation' },
      { name: 'Sustainability', key: 'sustainability' },
      { name: 'Biodiversity', key: 'biodiversity' },
    ];

    this.years = [
      { name: '2025', key: '2025' },
      { name: '2024', key: '2024' },
      { name: '2023', key: '2023' },
      { name: '2022', key: '2022' },
      { name: '2021', key: '2021' },
      { name: '2020', key: '2020' },
      { name: '2019', key: '2019' },
      { name: '2018', key: '2018' },
      { name: '2017', key: '2017' },
    ];

    this.resourceTypes = [
      { name: 'Data Set', key: 'dataset' },
      { name: 'Collection', key: 'collection' },
      { name: 'API', key: 'api' },
    ];

    this.availabilities = [
      { name: 'Documents', key: 'documents' },
      { name: 'Data Set', key: 'dataset' },
      { name: 'API', key: 'api' },
      { name: 'Service', key: 'service' },
      { name: 'Web Map', key: 'webmap' },
      { name: 'Web Scene', key: 'webscene' },
      { name: 'Web Mapping Application', key: 'webmappingapplication' },
      { name: 'Mobile Application', key: 'mobileapplication' },
      { name: 'Desktop Application', key: 'desktopapplication' },
      { name: 'Image', key: 'image' },
      { name: 'XML', key: 'collection' },
    ];

  }

  ngOnInit(): void {}
}
