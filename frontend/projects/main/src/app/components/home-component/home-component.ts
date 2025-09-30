import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SearchStore, SearchService, SearchBox } from 'gn-library';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchBox],
  templateUrl: './home-component.html',
  providers: [SearchStore, SearchService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  readonly store = inject(SearchStore);
  currentQuery = '';
  parentIsHomepage = true;
}
