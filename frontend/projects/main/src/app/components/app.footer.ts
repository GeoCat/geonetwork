import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
      <footer class="m-8">
          <div class="w-full max-w-5xl mx-auto">
              <div class="flex gap-4 justify-between items-center xl:flex-row flex-col">
                  <small class="order-1 xl:order-0">Copyright © 2025</small>
                  <div class="flex items-center gap-4 order-0 xl:order-1">
                      <a href="#"><i class="pi pi-github"></i></a>
                      <a href="#"><i class="pi pi-globe"></i></a>
                      <a href="#"><i class="pi pi-envelope"></i></a>
                  </div>
              </div>
          </div>
      </footer>
  `,
})
export class AppFooter {

}
