/**
 * Test-only globals.
 *
 * jsdom (used by the `ng test` unit-test builder) does not implement
 * IntersectionObserver, which `RevealOnScrollDirective` requires during
 * `ngAfterViewInit`. We provide a minimal inert stub so components render;
 * no reveal callbacks fire, matching a browser before a section scrolls in.
 */
class IntersectionObserverStub implements IntersectionObserver {
  readonly root: Element | Document | null = null;
  readonly rootMargin: string = '0px';
  readonly thresholds: ReadonlyArray<number> = [];

  constructor(private readonly callback: IntersectionObserverCallback) {}

  observe(): void {
    /* intentionally inert: never reports intersections */
  }

  unobserve(): void {}

  disconnect(): void {}

  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }
}

if (typeof globalThis.IntersectionObserver === 'undefined') {
  Object.defineProperty(globalThis, 'IntersectionObserver', {
    configurable: true,
    writable: true,
    value: IntersectionObserverStub,
  });
}
