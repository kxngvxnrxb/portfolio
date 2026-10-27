import { Component } from '@angular/core';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';

type Stat = {
  label: string;
  value: string;
  /* key of the inline Feather icon rendered for this stat (see hero.html) */
  icon: 'clock' | 'code' | 'briefcase' | 'award';
};

@Component({
  selector: 'app-hero',
  imports: [RevealOnScrollDirective],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  /**
   * Real figures only: the first three are the same stats previously shown in
   * the About section (5+ / 2+ / 20+); the fourth is the number of entries in
   * shared/data/certificates.data.ts.
   */
  stats: Stat[] = [
    { label: 'Years in tech', value: '5+', icon: 'clock' },
    { label: 'Years in development', value: '2+', icon: 'code' },
    { label: 'Projects, tools, and systems', value: '20+', icon: 'briefcase' },
    { label: 'Certifications earned', value: '10', icon: 'award' },
  ];

  scrollTo(id: string) {
    // scrollIntoView honors the shared `scroll-margin-top` on section[id]
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
