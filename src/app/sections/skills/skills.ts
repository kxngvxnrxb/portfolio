import { Component } from '@angular/core';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';

type Skill = {
  name: string;
  icon?: string;
};

type SkillGroup = {
  title: string;
  skills: Skill[];
  /* Stroke-style SVG path for groups whose skills have no logo */
  glyph?: string;
};

@Component({
  selector: 'app-skills',
  imports: [RevealOnScrollDirective],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {

  groups: SkillGroup[] = [
    {
      title: 'Frontend',
      skills: [
        { name: 'Angular', icon: 'assets/logos/angular.svg' },
        { name: 'TypeScript', icon: 'assets/logos/typescript.svg' },
        { name: 'HTML', icon: 'assets/logos/html5.svg' },
        { name: 'SCSS', icon: 'assets/logos/scss.svg' },
        { name: 'Javascript', icon: 'assets/logos/javascript.svg' },
        { name: 'Bootstrap', icon: 'assets/logos/bootstrap.svg' },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'C#', icon: 'assets/logos/csharp.svg' },
        { name: '.NET', icon: 'assets/logos/dotnet.svg' },
        { name: 'VB.NET', icon: 'assets/logos/vbnet.svg' },
      ]
    },
    {
      title: 'Databases',
      skills: [
        { name: 'PostgreSQL', icon: 'assets/logos/postgresql.svg' },
        { name: 'MySQL', icon: 'assets/logos/mysql.svg' },
        { name: 'Microsoft SQL Server', icon: 'assets/logos/mssql.svg' }
      ]
    },
    {
      title: 'Automation',
      skills: [
        { name: 'n8n', icon: 'assets/logos/n8n.svg' },
        { name: 'GoHighLevel', icon: 'assets/logos/ghl.jpeg' }
      ]
    },
    {
      title: 'AI',
      /* AI assistants have no official logos in assets — no fabricated files;
         they surface as text-only capability copy and stay out of the tile
         grid via the icon filter, while this glyph leads the row */
      glyph:
        'M9.94 15.5a2 2 0 0 0-1.44-1.44l-6.13-1.58a.5.5 0 0 1 0-.96l6.13-1.58A2 2 0 0 0 9.94 8.5l1.58-6.14a.5.5 0 0 1 .96 0l1.58 6.14a2 2 0 0 0 1.44 1.44l6.13 1.58a.5.5 0 0 1 0 .96l-6.13 1.58a2 2 0 0 0-1.44 1.44l-1.58 6.14a.5.5 0 0 1-.96 0z M20 3v4 M22 5h-4 M4 17v2 M5 18H3',
      skills: [
        { name: 'ChatGPT' },
        { name: 'Claude' },
        { name: 'Pi' },
        { name: 'Ollama' }
      ]
    },
    {
      title: 'Data & Analytics',
      skills: [
        { name: 'Excel', icon: 'assets/logos/excel.svg' },
        { name: 'Power BI', icon: 'assets/logos/powerbi.svg' },
        { name: 'Python', icon: 'assets/logos/python.svg' },
        { name: 'NumPy', icon: 'assets/logos/numpy.svg' }
      ]
    },
    {
      title: 'Design & Prototyping',
      skills: [
        { name: 'Photoshop', icon: 'assets/logos/photoshop.svg' },
        { name: 'Affinity', icon: 'assets/logos/affinity.svg' },
        { name: 'Canva', icon: 'assets/logos/canva.svg' },
        { name: 'Penpot', icon: 'assets/logos/penpot.svg' }
      ]
    },
    {
      title: 'CMS / Platforms',
      skills: [
        { name: 'Wordpress', icon: 'assets/logos/wordpress.svg' },
        { name: 'Shopify', icon: 'assets/logos/shopify.svg' }
      ]
    },
    {
      title: 'Tools & Environment',
      skills: [
        { name: 'Git', icon: 'assets/logos/git.svg' },
        { name: 'GitHub', icon: 'assets/logos/github.svg' },
        { name: 'GitLab', icon: 'assets/logos/gitlab.svg' },
        { name: 'Docker', icon: 'assets/logos/docker.svg' },
        { name: 'Linux', icon: 'assets/logos/linux.svg' },
        { name: 'XAMPP', icon: 'assets/logos/xampp.svg' },
        { name: 'Postman', icon: 'assets/logos/postman.svg' },
      ]
    },
    {
      title: 'Practices & Concepts',
      /* Concept skills have no logos — this stroke icon (same 1.5px language
         as the hero stat icons) leads the capability row instead */
      glyph:
        'M4.75 5.75A1.75 1.75 0 0 1 6.5 4h11a1.75 1.75 0 0 1 1.75 1.75v12.5A1.75 1.75 0 0 1 17.5 20h-11a1.75 1.75 0 0 1-1.75-1.75zM8.5 12.25l2.3 2.3 4.7-5.1',
      skills: [
        { name: 'Responsive Design' },
        { name: 'REST APIs' },
        { name: 'DTO Mapping' },
        { name: 'Debugging' },
        { name: 'API Integration' }
      ]
    }
  ];

  /* Full showcase: every icon-bearing skill across all groups (concept skills
     without logos stay out of the grid — nothing is trimmed) */
  get tools(): Skill[] {
    return this.groups.flatMap((group) => group.skills).filter((skill) => !!skill.icon);
  }
}
