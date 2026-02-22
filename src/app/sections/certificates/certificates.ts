import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';

type Certificate = {
  title: string;
  issuer: string;
  year: string;
  file: string;
};

@Component({
  selector: 'app-certificates',
  imports: [CommonModule, RevealOnScrollDirective],
  templateUrl: './certificates.html',
  styleUrl: './certificates.scss',
})
export class Certificates {
  certificates: Certificate[] = [
    {
      title: 'Data Analytics 101',
      issuer: 'BPI Foundation & Bayan Academy',
      year: '2023',
      file: 'assets/certificates/data-analytics-101.jpg',
    },
    {
      title: 'Getting Grounded on Analytics',
      issuer: 'Development Academy of the Philippines',
      year: '2023',
      file: 'assets/certificates/getting-grounded-on-analytics.jpg',
    },
    {
      title: 'Essential Excel Skills for Data Preparation and Analysis',
      issuer: 'Development Academy of the Philippines',
      year: '2023',
      file: 'assets/certificates/essential-excel-skills-for-data-preparation-and-analysis.jpg',
    },
    {
      title: 'Data Management Fundamentals',
      issuer: 'Development Academy of the Philippines',
      year: '2023',
      file: 'assets/certificates/data-management-fundamentals.jpg',
    },
    {
      title: 'Design Thinking for Analytics',
      issuer: 'Development Academy of the Philippines',
      year: '2023',
      file: 'assets/certificates/design-thinking-for-analytics.jpg',
    },
    {
      title: 'Analytics Applications in Finance and Risk',
      issuer: 'Development Academy of the Philippines',
      year: '2023',
      file: 'assets/certificates/analytics-applications-in-finance-and-risk.jpg',
    },
    {
      title: 'Applied Analytics in Public Finance and Budgeting',
      issuer: 'Development Academy of the Philippines',
      year: '2023',
      file: 'assets/certificates/applied-analytics-in-public-finance-and-budgeting.jpg',
    },
    {
      title: 'Data Visualization Fundamentals',
      issuer: 'Development Academy of the Philippines',
      year: '2023',
      file: 'assets/certificates/data-visualization-fundamentals.jpg',
    },
    {
      title: 'Dashboards and Drill-Down Analytics',
      issuer: 'Development Academy of the Philippines',
      year: '2023',
      file: 'assets/certificates/dashboards-and-drill-down-analytics.jpg',
    },
    {
      title: 'Domain Knowledge - Finance and Risk Microspecialization Pathway',
      issuer: 'Development Academy of the Philippines',
      year: '2023',
      file: 'assets/certificates/domain-knowledge-finance-and-risk-microspecialization-pathway.jpg',
    }
  ];

}
