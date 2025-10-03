import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopNavigation } from './components/navigation/top-navigation/top-navigation';
import { BottomNavigation } from './components/navigation/bottom-navigation/bottom-navigation';
import { FormsModule } from '@angular/forms';
import { Gn4ApiModule } from 'gn4-api-client';

@Component({
  selector: 'app-root',
  imports: [TopNavigation, BottomNavigation, RouterOutlet, FormsModule, Gn4ApiModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true,
})
export class App {
  protected readonly title = signal('main');
}
