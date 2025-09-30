import { SearchComponent } from '../search-component/search-component';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SearchStore } from '../../stores/store-search';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchComponent],
  templateUrl: './home-component.html',
  providers: [SearchStore, SearchService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  readonly store = inject(SearchStore);
  currentQuery = '';
}
