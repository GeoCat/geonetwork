
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SelectButton } from 'primeng/selectbutton';

@Component({
  selector: 'app-result-header',
  standalone: true,
  imports: [CommonModule, FormsModule, SelectButton],
  templateUrl: './result-header.html',
  styleUrl: './result-header.scss'
})
export class ResultHeader {
  @Input() totalCount: number = 0;
  @Input() currentCount: number = 0;
  @Input() layout: 'list' | 'grid' = 'list';
  @Output() layoutChange = new EventEmitter<'list' | 'grid'>();

  layoutOptions: ('list' | 'grid')[] = ['list', 'grid'];

  onLayoutChange(layout: any) {
    // Cast to the correct type to handle PrimeNG's type inference issue
    this.layoutChange.emit(layout as 'list' | 'grid');
  }
}
