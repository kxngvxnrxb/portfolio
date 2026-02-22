import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, CommonModule, RevealOnScrollDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  private readonly webhookUrl =
    'https://n8n-testdev.onrender.com/webhook/165f09be-ba63-4874-b838-90c561183691';

  isSubmitting = false;
  success = false;
  error = '';
  form;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  submit() {
    this.success = false;
    this.error = '';

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;

    const payload = {
      ...this.form.getRawValue(),
      submittedAt: new Date().toISOString(),
      source: 'Portfolio Contact Form',
      userAgent: navigator.userAgent,
    };

    this.http.post(this.webhookUrl, payload).subscribe({
      next: () => {
        this.isSubmitting = false;
        this.success = true;
        this.form.reset();
      },
      error: (err: any) => {
        this.isSubmitting = false;
        this.error =
          'Failed to send. Check webhook + CORS + that n8n returns 200. ' +
          (err?.message ? `(${err.message})` : '');
      },
    });
  }

  get name() { return this.form.get('name'); }
  get email() { return this.form.get('email'); }
  get message() { return this.form.get('message'); }
}
