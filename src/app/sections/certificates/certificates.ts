import { Component } from '@angular/core';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';
import { CERTIFICATES, Certificate } from '../../shared/data/certificates.data';

@Component({
  selector: 'app-certificates',
  imports: [RevealOnScrollDirective],
  templateUrl: './certificates.html',
  styleUrl: './certificates.scss',
})
export class Certificates {
  readonly certificates: Certificate[] = CERTIFICATES;
}
