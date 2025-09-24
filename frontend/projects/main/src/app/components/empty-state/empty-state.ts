import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-empty-state',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './empty-state.html',
})
export class EmptyStateComponent {
  @Input() title: string = 'No results found';
  @Input() message: string = 'Try adjusting your search terms or filters';
  @Input() iconClass: string = 'pi pi-search';
}
