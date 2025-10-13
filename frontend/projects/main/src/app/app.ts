import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopNavigation } from './components/navigation/top-navigation/top-navigation';
import { BottomNavigation } from './components/navigation/bottom-navigation/bottom-navigation';
import { FormsModule } from '@angular/forms';
import { Gn4ApiModule } from 'gn4-api-client';
import { SearchContextDirective, SearchService } from 'gn-library';

@Component({
  selector: 'app-root',
  providers: [SearchService],
  imports: [
    TopNavigation,
    BottomNavigation,
    RouterOutlet,
    FormsModule,
    Gn4ApiModule,
    SearchContextDirective,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true,
})
export class App {
  protected readonly title = signal('main');
}
