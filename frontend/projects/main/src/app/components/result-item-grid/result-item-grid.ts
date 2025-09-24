import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { elasticsearch, IndexRecord } from 'gn-api-client';

@Component({
  selector: 'app-result-item-grid',
  standalone: true,
  imports: [CommonModule, ButtonModule, TooltipModule],
  templateUrl: './result-item-grid.html',
  styleUrl: './result-item-grid.scss'
})
export class ResultItemGrid {
  @Input() result!: elasticsearch.SearchHit<IndexRecord>;
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
