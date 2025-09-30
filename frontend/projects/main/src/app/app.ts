import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopNavigation } from './components/navigation/top-navigation/top-navigation';
import { BottomNavigation } from './components/navigation/bottom-navigation/bottom-navigation';
import { FormsModule } from '@angular/forms';
import { Gn4ApiModule } from 'gn4-api-client';
import { ThemeManagerService } from './services/theme-manager.service';

@Component({
  selector: 'app-root',
  imports: [TopNavigation, BottomNavigation, RouterOutlet, FormsModule, Gn4ApiModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('main');
  private _themeManager = inject(ThemeManagerService);
}
