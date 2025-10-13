import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-result-header',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonModule],
  templateUrl: './result-header.html',
  styleUrl: './result-header.scss',
})
export class ResultHeader {
  @Input() totalCount: number = 0;
  @Input() currentCount: number = 0;
  @Input() layout: 'list' | 'grid' = 'list';
  @Output() layoutChange = new EventEmitter<'list' | 'grid'>();
  active: string | null = 'all';

  setActive(name: string): void {
    this.active = this.active === name ? null : name;
  }

  buttons = [
    { label: 'All', value: 'all', icon: 'pi pi-th-large' },
    { label: 'Datasets', value: 'datasets', icon: 'pi pi-database' },
    { label: 'Documentation', value: 'documentation', icon: 'pi pi-file' },
    { label: 'Services', value: 'services', icon: 'pi pi-code' },
    { label: 'Other', value: 'other', icon: '' },
  ];

  layoutOptions: ('list' | 'grid')[] = ['list', 'grid'];

  onLayoutChange(layout: any) {
    // Cast to the correct type to handle PrimeNG's type inference issue
    this.layoutChange.emit(layout as 'list' | 'grid');
  }
}
