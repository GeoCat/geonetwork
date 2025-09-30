import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { LayoutService } from './layout.service';
import { $t } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';
import Lara from '@primeuix/themes/lara';
import { APP_COLORS } from '../constants/colors';

const presets = {
  Aura,
  Lara,
} as const;

@Injectable({
  providedIn: 'root',
})
export class ThemeManagerService {
  private platformId = inject(PLATFORM_ID);
  private layoutService = inject(LayoutService);

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      this.initializeTheme();
      this.subscribeToLayoutChanges();
    }
  }

  private initializeTheme() {
    const currentState = this.layoutService.appState();
    this.applyTheme(currentState);
  }

  private subscribeToLayoutChanges() {
    this.layoutService.appStateUpdate$.subscribe((state) => {
      this.applyTheme(state);
    });
  }

  private applyTheme(state: any) {
    const preset = presets[state.preset as keyof typeof presets];
    const primaryColorPalette = APP_COLORS[state.primary] || APP_COLORS['blue'];

    const presetExtension = {
      semantic: {
        primary: primaryColorPalette,
        colorScheme: {
          light: {
            primary: {
              color: '{primary.500}',
              contrastColor: '#ffffff',
              hoverColor: '{primary.600}',
              activeColor: '{primary.700}',
            },
            highlight: {
              background: '{primary.50}',
              focusBackground: '{primary.100}',
              color: '{primary.700}',
              focusColor: '{primary.800}',
            },
          },
          dark: {
            primary: {
              color: '{primary.400}',
              contrastColor: '{surface.900}',
              hoverColor: '{primary.300}',
              activeColor: '{primary.200}',
            },
            highlight: {
              background: 'color-mix(in srgb, {primary.400}, transparent 84%)',
              focusBackground: 'color-mix(in srgb, {primary.400}, transparent 76%)',
              color: 'rgba(255,255,255,.87)',
              focusColor: 'rgba(255,255,255,.87)',
            },
          },
        },
      },
    };

    $t().preset(preset).preset(presetExtension).use({ useDefaultOptions: true });
  }
}
