import { Component } from '@angular/core';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-contact',
  imports: [RevealOnScrollDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {}
