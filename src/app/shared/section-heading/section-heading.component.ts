import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-section-heading',
  standalone: true,
  imports: [NgIf],
  template: `
    <h2 class="section-title">{{ title }}</h2>
    <p class="section-subtitle" *ngIf="subtitle">{{ subtitle }}</p>
  `,
  styles: [
    `
      .section-title {
        text-align: center;
        font-size: 2rem;
        margin-bottom: 0.5rem;
        color: var(--text-primary);
      }
      .section-subtitle {
        text-align: center;
        color: var(--text-muted);
        margin-bottom: 2.5rem;
      }
    `,
  ],
})
export class SectionHeadingComponent {
  @Input() title = '';
  @Input() subtitle?: string;
}
