import { Routes } from '@angular/router';
import { HomeComponent } from "./components/home-component/home-component";
import { CatalogueComponent } from "./components/catalogue-component/catalogue-component";
import { MapComponent } from "./components/map-component/map-component";


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'catalogue', component: CatalogueComponent },
  { path: 'map', component: MapComponent },
  { path: '**', redirectTo: '' }
];
