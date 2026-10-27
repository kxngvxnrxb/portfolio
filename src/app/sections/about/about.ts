import { Component } from '@angular/core';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-about',
  imports: [RevealOnScrollDirective],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  scrollTo(id: string) {
    // scrollIntoView honors the shared `scroll-margin-top` on section[id]
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
