import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonModule} from 'primeng/button';
import {elasticsearch, IndexRecord} from 'gn-api-client';

@Component({
  selector: 'app-result-item-list',
  templateUrl: './result-item-list.html',
  styleUrl: './result-item-list.scss',
  standalone: true,
  imports: [CommonModule, ButtonModule],
})
export class ResultItemList {
  @Input() result!: elasticsearch.SearchHit<IndexRecord>;
  @Input() isFirst: boolean = false;
  @Output() viewDetails = new EventEmitter<string>();

  getTruncatedTitle(): string {
    const title =  this.result._source?.resourceTitleObject?.['default'] ?? 'No title available';
    return title.substring(0, 180) + '...';
  }


  getTruncatedDescription(): string {
    const description = this.result._source?.resourceAbstractObject?.['default'] ?? 'No description available';
    return description.substring(0, 250) + '...';
  }


  getSourceName(): string {
    const nameObject = this.result._source?.OrgObject as { [key: string]: string } | undefined;
    const name = nameObject?.['default'];
    return name ?? 'No name available';
  }


  onViewDetails() {
    this.viewDetails.emit(this.result._id);
  }

  getOverviewImage(): string | null {
    const overview = this.result?._source?.overview;
    if (overview && overview.length > 0) {
      if (overview[0].data && overview[0].data.startsWith('data:image')) {
        return overview[0].data;
      }
      if (overview[0].url) {
        return overview[0].url;
      }
    }
    return null;
  }

  getOverviewImageName(): string {
    const overview = this.result?._source?.overview;
    if (overview && overview.length > 0 && overview[0].nameObject) {
      return overview[0].nameObject['default'] || overview[0].nameObject['langfre'] || 'Image';
    }
    return 'Preview Image';
  }

  onImageError(event: Event): void {
    const target = event.target as HTMLImageElement;
    if (target) {
      target.style.display = 'none';
    }
  }
}
