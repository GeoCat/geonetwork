import { Routes } from '@angular/router';
import { HomeComponent } from "./components/home-component/home-component";
import { CatalogueComponent } from "./components/catalogue-component/catalogue-component";
import { MapComponent } from "./components/map-component/map-component";
import { CatalogueDetailComponent } from './components/result-detail/result-detail';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'catalogue', component: CatalogueComponent },
  { path: 'catalogue/record/:id', component: CatalogueDetailComponent },
  { path: 'map', component: MapComponent },
  { path: '**', redirectTo: '' }
];
