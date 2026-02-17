import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type Service = {
  title: string;
  description: string;
};

@Component({
  selector: 'app-services',
  imports: [CommonModule],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {
  services: Service[] = [
    {
      title: 'Frontend Development',
      description: 'Angular components, responsive UI, dashboards, forms, clean state patterns.',
    },
    {
      title: 'Automation Setup',
      description: 'n8n / GoHighLevel basics: lead routing, notifications, calendar, sheets.',
    },
    {
      title: 'UI Polish',
      description: 'Spacing, typography, layout consistency, accessibility-first UI improvements.',
    },
  ];
}
