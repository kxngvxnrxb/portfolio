import { Component, signal } from '@angular/core';
import { Navbar } from './layout/navbar/navbar';
import { Hero } from './sections/hero/hero';
import { About } from './sections/about/about';
import { Projects } from './sections/projects/projects';
import { Contact } from './sections/contact/contact';
import { Footer } from './layout/footer/footer';
import { Skills } from './sections/skills/skills';
import { Experience } from './sections/experience/experience';
import { Certificates } from './sections/certificates/certificates';

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, About, Skills, Projects, Experience, Certificates, Contact, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('my-portfolio');
}
