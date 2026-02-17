import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

type NavItem = { id: string; label: string };

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  menuOpen = false;

  items: NavItem[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'contact', label: 'Contact' },
  ];

  activeId: string = 'home';

  private navOffset = 86;

  private observer?: IntersectionObserver;

  toggle() { this.menuOpen = !this.menuOpen; }
  close() { this.menuOpen = false; }

  scrollTo(id: string) {
    const el = document.getElementById(id);
    if (!el) return;

    this.activeId = id;

    const y = el.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: y, behavior: 'smooth' });

    this.close();
  }

  ngAfterViewInit(): void {
    this.updateActiveSection();
  }

  @HostListener('window:scroll')
  onScroll() {
    this.updateActiveSection();
  }

  private updateActiveSection() {
    let current = this.items[0]?.id ?? 'home';
    let bestTop = -Infinity;

    for (const item of this.items) {
      const el = document.getElementById(item.id);
      if (!el) continue;

      const top = el.getBoundingClientRect().top - this.navOffset;

      if (top <= 0 && top > bestTop) {
        bestTop = top;
        current = item.id;
      }
    }

    this.activeId = current;
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
