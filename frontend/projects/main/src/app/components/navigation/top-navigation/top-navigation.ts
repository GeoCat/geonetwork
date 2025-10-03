import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';

import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.html',
  styleUrl: './top-navigation.scss',
  standalone: true,
  imports: [ButtonModule, StyleClassModule, RouterLink],
})
export class TopNavigation {
  logo = 'assets/images/logo.svg';
}
