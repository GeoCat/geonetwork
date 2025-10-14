import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { faBrandGithub } from '@ng-icons/font-awesome/brands';
import { faEnvelope } from '@ng-icons/font-awesome/regular';

@Component({
  selector: 'app-bottom-navigation',
  imports: [NgIcon],
  templateUrl: './bottom-navigation.html',
  styleUrl: './bottom-navigation.scss',
  viewProviders: [provideIcons({ faBrandGithub, faEnvelope })],
  standalone: true,
})
export class BottomNavigation {}
