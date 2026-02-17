import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  bullets: string[];
  tech: string[];
};

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  experiences: ExperienceItem[] = [
    {
      role: 'Angular Developer',
      company: 'EXTEND Resourcing',
      period: 'Jan 2025 – Present · Remote',
      bullets: [
        'Build and maintain Angular frontend features',
        'Integrate APIs and handle data-driven UI components',
        'Improve reusable components and UI performance'
      ],
      tech: ['Angular', 'TypeScript', 'RxJS', 'REST APIs']
    },
    {
      role: '.NET Developer',
      company: 'Mortgage House',
      period: 'May 2024 – Dec 2024 · Remote',
      bullets: [
        'Developed REST APIs and backend services',
        'Worked with data processing and system integration',
        'Supported frontend integration and API design'
      ],
      tech: ['.NET', 'C#', 'REST APIs', 'SQL']
    },
    {
      role: 'Production Engineer',
      company: 'Brother Industries Philippines',
      period: 'Jul 2022 – Feb 2023',
      bullets: [
        'Supported system and network troubleshooting',
        'Managed database-related tasks and system improvements',
        'Assisted in system design and testing'
      ],
      tech: ['Systems', 'Databases', 'Troubleshooting']
    },
    {
      role: 'IT Specialist / Graphic Designer',
      company: 'Panaderia Pantoja Inc.',
      period: '2018 – 2022',
      bullets: [
        'Maintained computer systems and networks',
        'Designed marketing materials and UI assets',
        'Provided hardware and software support'
      ],
      tech: ['Photoshop', 'Networking', 'IT Support']
    },
    {
      role: 'Freelance Web Designer',
      company: 'RCPEA & Co.',
      period: '2020 · Part-time',
      bullets: [
        'Designed responsive website layouts and UI concepts',
        'Created wireframes and visual assets using Photoshop',
        'Implemented designs using GoDaddy Website Builder'
      ],
      tech: ['Photoshop', 'Web Design', 'UX', 'GoDaddy']
    }
  ];
}
