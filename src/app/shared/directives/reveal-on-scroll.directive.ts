import { AfterViewInit, Directive, ElementRef, Input, OnDestroy } from '@angular/core';

@Directive({
  selector: '[revealOnScroll]',
  standalone: true,
})
export class RevealOnScrollDirective implements AfterViewInit, OnDestroy {
  @Input() revealOnce = true;

  private observer?: IntersectionObserver;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngAfterViewInit() {
    const node = this.el.nativeElement;
    node.classList.add('reveal');

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            node.classList.add('show');
            if (this.revealOnce) this.observer?.unobserve(node);
          } else if (!this.revealOnce) {
            node.classList.remove('show');
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
    );

    this.observer.observe(node);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}