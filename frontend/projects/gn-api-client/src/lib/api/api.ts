export * from './capabilities.service';
import { CapabilitiesService } from './capabilities.service';
export * from './collection.service';
import { CollectionService } from './collection.service';
export * from './collections.service';
import { CollectionsService } from './collections.service';
export * from './conformance.service';
import { ConformanceService } from './conformance.service';
export * from './indexingController.service';
import { IndexingControllerService } from './indexingController.service';
export * from './meApi.service';
import { MeApiService } from './meApi.service';
export * from './record.service';
import { RecordService } from './record.service';
export * from './records.service';
import { RecordsService } from './records.service';
export * from './searchController.service';
import { SearchControllerService } from './searchController.service';
export * from './sortables.service';
import { SortablesService } from './sortables.service';
export const APIS = [
  CapabilitiesService,
  CollectionService,
  CollectionsService,
  ConformanceService,
  IndexingControllerService,
  MeApiService,
  RecordService,
  RecordsService,
  SearchControllerService,
  SortablesService,
];
