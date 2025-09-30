import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-empty-state',
  standalone: true,
  imports: [],
  templateUrl: './empty-state.html',
})
export class EmptyStateComponent {
  @Input() title: string = 'No results found';
  @Input() message: string = 'Try adjusting your search terms or filters';
  @Input() iconClass: string = 'pi pi-search';
}
