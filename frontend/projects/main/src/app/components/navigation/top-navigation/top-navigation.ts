import { Component, computed, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { LayoutService } from '../../../services/layout.service';

import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.html',
  styleUrl: './top-navigation.scss',
  standalone: true,
  imports: [ButtonModule, StyleClassModule, RouterLink],

})
export class TopNavigation {
  layoutService: LayoutService = inject(LayoutService);

  isDarkMode = computed(() => this.layoutService.appState().darkMode);

  toggleDarkMode() {
    this.layoutService.appState.update((state) => ({
      ...state,
      darkMode: !state.darkMode,
    }));
  }
}
