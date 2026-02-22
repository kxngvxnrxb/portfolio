import { Component } from '@angular/core';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-hero',
  imports: [RevealOnScrollDirective],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  scrollTo(id: string) {
    const el = document.getElementById(id);
    if (!el) return;

    const y = el.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}
