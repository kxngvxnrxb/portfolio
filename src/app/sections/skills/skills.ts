import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type Skill = {
  name: string;
  icon?: string;
};

type SkillGroup = {
  title: string;
  skills: Skill[];
};

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
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
      skills: [
        { name: 'Responsive Design' },
        { name: 'REST APIs' },
        { name: 'DTO Mapping' },
        { name: 'Debugging' },
        { name: 'API Integration' }
      ]
    }
  ];
}
