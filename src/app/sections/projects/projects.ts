import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

type Project = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  bullets: string[];
  screenshots: string[];
  href?: string;
  variant: 't1' | 't2' | 't3';
};

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  projects: Project[] = [
    {
      title: 'Customer Management UI – Wireframes',
      description: 'Wireframes and UX planning for a customer management module with complex forms and structured data workflows.',
      tags: ['Penpot', 'Wireframing', 'UX Design', 'UI Planning'],
      image: 'assets/projects/customer-list.jpeg',
      bullets: [
        'Designed multi-screen layouts for a customer data management workflow',
        'Planned form structure, navigation, and reusable UI components',
        'Improved development speed by defining UI architecture before implementation',
        'Screens and data anonymized to remove company-specific information',
        'Focused on usability, readability, and reducing form complexity'
      ],
      screenshots: [
        'assets/projects/customer-profile.jpeg',
        'assets/projects/customer-new-identity-verification.jpeg'
      ],
      href: '#',
      variant: 't1',
    },
    {
      title: 'Agricultural Wage Rate Dashboard',
      description: 'Interactive Excel dashboard for wage trends (1994–2019) with filters and insights.',
      tags: ['Excel', 'Data Cleaning', 'Dashboard', 'Data Visualization'],
      image: 'assets/projects/wage-dashboard.png',
      bullets: [
        'Cleaned and prepared raw wage datasets for analysis',
        'Built interactive slicers/filters (worker type, gender, year)',
        'Designed KPI cards, trend charts, and top regions ranking for quick insights',
      ],
      screenshots: [
        'assets/projects/wage-dashboard.png',
        // optional: add more screenshots later
        // 'assets/projects/wage-dashboard-2.png',
      ],
      href: 'https://github.com/kxngvxnrxb/agricultural-wage-dashboard',
      variant: 't1',
    },
    {
      title: 'Food Price Analytics Dashboard (Power BI)',
      description: 'Interactive data dashboard analyzing food commodity prices in the Philippines.',
      tags: ['Power BI', 'Data Analytics', 'Visualization', 'Excel'],
      image: 'assets/projects/powerbi-dashboard.jpg',
      bullets: [
        'Built an interactive dashboard analyzing food commodity prices from 2000–2023',
        'Created trend charts, category filters, and regional comparisons',
        'Cleaned and prepared datasets before visualization',
        'Designed layout focused on clarity and usability'
      ],
      screenshots: [
        'assets/projects/powerbi-dashboard.jpg'
      ],
      href: 'https://github.com/kxngvxnrxb/food-prices-analytics-dashboard', // later you can link to GitHub or PDF
      variant: 't1'
    }
  ];

  selected?: Project;
  currentShot = 0;

  open(p: Project) {
    this.selected = p;
    this.currentShot = 0;
    document.body.classList.add('modal-open');
  }

  close() {
    this.selected = undefined;
    document.body.classList.remove('modal-open');
  }

  nextShot() {
    if (!this.selected) return;
    this.currentShot =
      (this.currentShot + 1) % this.selected.screenshots.length;
  }

  prevShot() {
    if (!this.selected) return;
    this.currentShot =
      (this.currentShot - 1 + this.selected.screenshots.length) %
      this.selected.screenshots.length;
  }

  @HostListener('document:keydown.escape')
  onEsc() {
    if (this.selected) this.close();
  }
}
