import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  onSubmit() {
    // Later: hook this to EmailJS / Formspree / backend endpoint
    alert('Submitted ✅ (hook this to email/API later)');
  }
}
