import { Component, ElementRef, HostListener, ViewChild, AfterViewInit } from '@angular/core';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';

type Project = {
  title: string;
  description: string;
  tags: string[];
  /** Screenshot. Optional: tiles without one fall back to a typographic tile. */
  image?: string;
  /** Short tagline, shown in the modal under the description. */
  tagline?: string;
  /** Portrait-shaped artwork: shifts the tile crop down to its focal point. */
  portrait?: boolean;
  bullets: string[];
  video?: string;
  href?: string;
};

@Component({
  selector: 'app-projects',
  imports: [RevealOnScrollDirective],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects implements AfterViewInit {
  projects: Project[] = [
    {
      /* Live product, featured first. Portrait promo artwork (768x1400),
         cropped to the phone via the `portrait` flag. */
      title: 'ReLyfe',
      description:
        'Mobile-only neighborhood giveaway and resale board for Android. Give away, sell, or recycle unused household items — free, with no account and no ads.',
      tags: ['Android', 'Product', 'Waitlist'],
      tagline: 'One city. One board. Nothing wasted.',
      image: 'assets/images/relyfe-preview.jpg',
      portrait: true,
      bullets: [
        'Mobile-only neighborhood board for giving away, selling, or recycling unused household items',
        'Free to use — no account required and no ads',
        'Waitlist landing page leading up to the Android launch',
        'Built around keeping usable items in circulation instead of in the trash',
      ],
      href: 'https://relyfe.kingvenreb.dev/',
    },
    {
      title: 'AI Lead Management & Outreach Automation (Work in Progress)',
      description:
        'AI-powered lead automation system built with n8n that handles lead intake, scoring, outreach, reply detection, and automated follow-ups.',
      tags: ['n8n', 'AI Automation', 'PostgreSQL', 'Gmail API', 'Telegram', 'Workflow Automation'],
      image: 'assets/projects/n8n-workflow.png',
      video: 'assets/projects/n8n-automation-flow.mp4',
      bullets: [
        'Built an automated lead intake system using webhooks and data validation',
        'Implemented AI-powered lead scoring and routing logic',
        'Generated personalized outreach emails using AI',
        'Detected Gmail replies and automatically stopped follow-ups',
        'Created a scheduled AI follow-up workflow for unanswered leads'
      ],
      href: 'https://github.com/kxngvxnrxb/lead-automation-system',
    },
    {
      title: 'Customer Management UI – Wireframes',
      description: 'Wireframes and UX planning for a customer management module with complex forms and structured data workflows.',
      tags: ['Penpot', 'Wireframing', 'UX Design', 'UI Planning'],
      image: 'assets/projects/customer-list.jpeg',
      video: 'assets/projects/customer-wireframe-flow.mp4',
      bullets: [
        'Designed multi-screen layouts for a customer data management workflow',
        'Planned form structure, navigation, and reusable UI components',
        'Improved development speed by defining UI architecture before implementation',
        'Screens and data anonymized to remove company-specific information',
        'Focused on usability, readability, and reducing form complexity'
      ],
      href: 'https://github.com/kxngvxnrxb/customer-management-wireframe',
    },
    {
      title: 'Food Price Analytics Dashboard (Power BI)',
      description: 'Interactive data dashboard analyzing food commodity prices in the Philippines.',
      tags: ['Power BI', 'Data Analytics', 'Visualization', 'Excel'],
      image: 'assets/projects/powerbi-dashboard.jpg',
      video: 'assets/projects/powerbi-dashboard-flow.mp4',
      bullets: [
        'Built an interactive dashboard analyzing food commodity prices from 2000–2023',
        'Created trend charts, category filters, and regional comparisons',
        'Cleaned and prepared datasets before visualization',
        'Designed layout focused on clarity and usability'
      ],
      href: 'https://github.com/kxngvxnrxb/food-prices-analytics-dashboard',
    },
    {
      title: 'Agricultural Wage Rate Dashboard',
      description: 'Interactive Excel dashboard for wage trends (1994–2019) with filters and insights.',
      tags: ['Excel', 'Data Cleaning', 'Dashboard', 'Data Visualization'],
      image: 'assets/projects/wage-dashboard.png',
      video: 'assets/projects/agricultural-wage-dashboard-flow.mp4',
      bullets: [
        'Cleaned and prepared raw wage datasets for analysis',
        'Built interactive slicers/filters (worker type, gender, year)',
        'Designed KPI cards, trend charts, and top regions ranking for quick insights',
      ],
      href: 'https://github.com/kxngvxnrxb/agricultural-wage-dashboard',
    }
  ];

  selected?: Project;
  currentShot = 0;

  /* Horizontal scroll-snap slider */
  @ViewChild('scroller') scroller?: ElementRef<HTMLElement>;
  activeIndex = 0;

  ngAfterViewInit() {
    this.onScroll();
  }

  /** One snap step = tile width + grid gap (0 in jsdom / pre-layout, guarded) */
  private step(): number {
    const el = this.scroller?.nativeElement;
    const tile = el?.querySelector<HTMLElement>('.tile');
    if (!el || !tile) return 0;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    return tile.offsetWidth + gap;
  }

  get atStart(): boolean {
    return this.activeIndex <= 0;
  }

  get atEnd(): boolean {
    return this.activeIndex >= this.projects.length - 1;
  }

  /* Active dot = index of the tile nearest the current scroll position */
  onScroll() {
    const el = this.scroller?.nativeElement;
    const s = this.step();
    if (!el || !s) return;
    const max = el.scrollWidth - el.clientWidth;
    const i = Math.round(el.scrollLeft / s);
    this.activeIndex = el.scrollLeft >= max - 2
      ? this.projects.length - 1
      : Math.max(0, Math.min(this.projects.length - 1, i));
  }

  slide(dir: number) {
    const s = this.step();
    if (s) this.scroller?.nativeElement.scrollBy({ left: dir * s, behavior: 'smooth' });
  }

  goTo(i: number) {
    this.scroller?.nativeElement.scrollTo({ left: i * this.step(), behavior: 'smooth' });
  }

  open(p: Project) {
    this.selected = p;
    this.currentShot = 0;
    document.body.classList.add('modal-open');
  }

  close() {
    this.selected = undefined;
    document.body.classList.remove('modal-open');
  }

  @HostListener('document:keydown.escape')
  onEsc() {
    if (this.selected) this.close();
  }
}
