import { Component, Input, Output, EventEmitter } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { elasticsearch, IndexRecord } from 'gn-api-client';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { faImage } from '@ng-icons/font-awesome/regular';
import { faSolidEye } from '@ng-icons/font-awesome/solid';

@Component({
  selector: 'app-result-item-grid',
  standalone: true,
  imports: [ButtonModule, TooltipModule, NgIcon],
  templateUrl: './result-item-grid.html',
  viewProviders: [provideIcons({ faImage, faSolidEye })],
  styleUrl: './result-item-grid.scss',
})
export class ResultItemGrid {
  @Input() result!: IndexRecord;
  @Output() viewDetails = new EventEmitter<string>();
  @Output() download = new EventEmitter<string>();

  getTruncatedDescription(): string {
    const description = this.result.resourceAbstractObject?.['default'];
    if (!description) return 'No description available';

    return description.length > 100 ? description.substring(0, 100) + '...' : description;
  }

  onViewDetails() {
    this.viewDetails.emit(this.result.info?._id);
  }

  getOverviewImage(): string | null {
    const overview = this.result?.overview;
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
    const overview = this.result?.overview;
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
