import { Component, OnInit } from '@angular/core';

import { MultiSelect } from 'primeng/multiselect';
import { FormsModule } from '@angular/forms';
import {FloatLabel} from 'primeng/floatlabel';
import {TreeSelect} from 'primeng/treeselect';
import { NodeService } from '../../services/nodeservice.service'

interface Catalogue {
    name: string;
    code: string;
}

interface Theme {
    name: string;
    code: string;
}

interface Keyword {
    name: string;
    code: string;
}

interface Year {
    name: string;
    code: string;
}

interface resourceType {
    name: string;
    code: string;
}

interface Availability {
    name: string;
    code: string;
}


@Component({
  selector: 'app-facet-component',
  templateUrl: './facet-component.html',
  styleUrl: './facet-component.scss',
  standalone: true,
  imports: [
    MultiSelect,
    FormsModule,
    FloatLabel,
    TreeSelect
],
  providers: [NodeService]

})

export class FacetComponent implements OnInit{
  nodes!: any[];

  selectedNodes: any;

  catalogue!: Catalogue[];
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

    this.catalogue = [
      { name: 'Catalogue 1', code: '1' },
      { name: 'Catalogue 2', code: '2' },
      { name: 'Catalogue 3', code: '3' },
    ];

    this.inspireThemes = [
      { name: 'Theme 1', code: '1' },
      { name: 'Theme 2', code: '2' },
      { name: 'Theme 3', code: '3' },
      { name: 'Theme 4', code: '4' },
      { name: 'Theme 5', code: '5' },
      { name: 'Theme 6', code: '6' }
    ];

    this.keywords = [
      { name: 'Marine', code: 'marine' },
      { name: 'Ocean', code: 'ocean' },
      { name: 'Sea', code: 'sea' },
      { name: 'Rivers', code: 'rivers' },
      { name: 'Lakes', code: 'lakes' },
      { name: 'Coast', code: 'coast' },
      { name: 'Water', code: 'water' },
      { name: 'Wildlife', code: 'wildlife' },
      { name: 'Biodiversity', code: 'biodiversity' },
      { name: 'Ecosystem', code: 'ecosystem' },
      { name: 'Environment', code: 'environment' },
      { name: 'Conservation', code: 'conservation' },
      { name: 'Sustainability', code: 'sustainability' },
      { name: 'Biodiversity', code: 'biodiversity' },
    ];

      this.years = [
          { name: '2025', code: '2025' },
          { name: '2024', code: '2024' },
          { name: '2023', code: '2023' },
          { name: '2022', code: '2022' },
          { name: '2021', code: '2021' },
          { name: '2020', code: '2020' },
          { name: '2019', code: '2019' },
          { name: '2018', code: '2018' },
          { name: '2017', code: '2017' },
      ];

      this.resourceTypes = [
          { name: 'Data Set', code: 'dataset' },
          { name: 'Collection', code: 'collection' },
          { name: 'API', code: 'api' }
      ];

      this.availabilities = [
          { name: 'Documents', code: 'documents' },
          { name: 'Data Set', code: 'dataset' },
          { name: 'API', code: 'api' },
          { name: 'Service', code: 'service' },
          { name: 'Web Map', code: 'webmap' },
          { name: 'Web Scene', code: 'webscene' },
          { name: 'Web Mapping Application', code: 'webmappingapplication' },
          { name: 'Mobile Application', code: 'mobileapplication' },
          { name: 'Desktop Application', code: 'desktopapplication' },
          { name: 'Image', code: 'image' },
          { name: 'XML', code: 'collection' }
      ];
  }

  ngOnInit(): void {}

}
