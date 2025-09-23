import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppTopbar } from './components/app.topbar';
import { FormsModule } from '@angular/forms';
import { AppFooter } from "./components/app.footer";
import { Gn4ApiModule } from 'gn4-api-client';

@Component({
  selector: 'app-root',
  imports: [AppTopbar, AppFooter, RouterOutlet, FormsModule, Gn4ApiModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('main');
}
