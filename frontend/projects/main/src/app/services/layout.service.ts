import { effect, Injectable, signal, WritableSignal } from '@angular/core';
import { Subject } from 'rxjs';

export interface AppState {
    preset: string;
    primary: string;
    surface: string | undefined | null;
    darkMode: boolean;
}

@Injectable({
    providedIn: 'root',
})
export class LayoutService {
    _appState: AppState = {
        preset: 'Aura',
        primary: 'sextant',
        surface: null,
        darkMode: false,
    };

    appState = signal<AppState>(this._appState);

    private initialized = false;

    private appStateUpdate = new Subject<AppState>();

    appStateUpdate$ = this.appStateUpdate.asObservable();

    constructor() {
        effect(() => {
            const appState = this.appState();
            if (appState) {
                this.onAppStateUpdate();
            }
        });

        effect(() => {
            const state = this.appState();

            if (!this.initialized || !state) {
                this.initialized = true;
                return;
            }

        });
    }

    onAppStateUpdate() {
        this._appState = { ...this.appState() };
        this.appStateUpdate.next(this.appState());
    }
}
