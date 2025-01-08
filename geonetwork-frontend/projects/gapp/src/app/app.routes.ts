import { Routes } from '@angular/router';
import { HomePageComponent } from './home/home-page/home-page.component';
import { SearchPageComponent } from './search/search-page/search-page.component';
import { RecordPageComponent } from './record/record-page/record-page.component';
import { MapPageComponent } from './map-page/map-page.component';
import { NewRecordPageComponent } from './new-record-page/new-record-page.component';
import { AuthGuard } from 'glib';
import { SigninPageComponent } from './signin-page/signin-page.component';

export const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'signin', component: SigninPageComponent },
  { path: 'search', component: SearchPageComponent },
  { path: 'map', component: MapPageComponent },
  {
    path: 'metadata/:uuid',
    component: RecordPageComponent,
  },
  {
    path: 'new-record',
    component: NewRecordPageComponent,
    canActivate: [AuthGuard],
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
