import { Component } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { ProgressSpinner } from 'primeng/progressspinner';

@Component({
  selector: 'app-loading-component',
  imports: [ProgressSpinner],
  standalone: true,
  templateUrl: './loading-component.html',
  styleUrl: './loading-component.scss',
})
export class LoadingComponent {}
