import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { elasticsearch, IndexRecord } from 'gn-api-client';

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
  @Output() download = new EventEmitter<string>();

  getTruncatedDescription(): string {
    const description = this.result._source?.resourceAbstractObject?.['default'];
    if (!description) return 'No description available';

    return description.length > 100 ? description.substring(0, 100) + '...' : description;
  }

  onViewDetails() {
    this.viewDetails.emit(this.result._id);
  }

  onDownload() {
    this.download.emit(this.result._id);
  }
}
