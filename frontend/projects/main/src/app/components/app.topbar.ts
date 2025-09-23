import { Component, computed, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { AppConfig } from './app.config';
import { LayoutService } from '../services/layout.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-topbar',
  standalone: true,
    imports: [CommonModule, ButtonModule, StyleClassModule, AppConfig, RouterLink],
  template: `
    <div
      class="p-4 bg-[#093564] mx-auto border border-surface-200 dark:border-surface-700 w-full"
    >
      <div class="flex justify-between items-center">
        <div class="flex gap-3 items-center">
          <span class="hidden sm:flex flex-col sm:flex-row gap-4">
               <a class="text-white" routerLink="/" >Home</a>
                <a routerLink="/catalogue" class="text-white">Catalog</a>
                <a routerLink="/map" class="text-white">Map</a>
          </span>
        </div>
        <div class="flex items-center gap-4">
            <button
                    type="button"
                    class="
                    cursor-pointer 
                    w-10 
                    h-10 
                    flex 
                    items-center 
                    justify-center 
                    rounded-full 
                    hover:bg-surface-400
                    dark:hover:bg-surface-800 
                    transition-all 
                    text-white
                    dark:text-surface-0 
                    focus-visible:outline-hidden 
                    focus-visible:ring-1 
                    focus-visible:ring-primary 
                    focus-visible:ring-offset-2 
                    focus-visible:ring-offset-surface-0 
                    dark:focus-visible:ring-offset-surface-950"
                    
            >
                <i
                        class="pi pi-user text-base"
                
                ></i>
            </button>
<!--          <button-->
<!--            type="button"-->
<!--            class="cursor-pointer w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-100 dark:hover:bg-surface-800 transition-all text-surface-900 dark:text-surface-0 focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface-0 dark:focus-visible:ring-offset-surface-950"-->
<!--            (click)="toggleDarkMode()"-->
<!--          >-->
<!--            <i-->
<!--              class="pi text-base"-->
<!--              [ngClass]="{-->
<!--                'pi-moon': isDarkMode(),-->
<!--                'pi-sun': !isDarkMode()-->
<!--              }"-->
<!--            ></i>-->
<!--          </button>-->
          <div class="relative">
            <p-button
              pStyleClass="@next"
              enterFromClass="hidden"
              enterActiveClass="animate-scalein"
              leaveToClass="hidden"
              leaveActiveClass="animate-fadeout"
              [hideOnOutsideClick]="true"
              icon="pi pi-cog"
              text
              rounded
              aria-label="Settings"
            />
            <app-config class="hidden" />
          </div>
        </div>
      </div>
    </div>
  `,
})
export class AppTopbar {
  layoutService: LayoutService = inject(LayoutService);

  isDarkMode = computed(() => this.layoutService.appState().darkMode);

  toggleDarkMode() {
    this.layoutService.appState.update((state) => ({
      ...state,
      darkMode: !state.darkMode,
    }));
  }
}
