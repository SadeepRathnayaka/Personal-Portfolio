import { Component } from '@angular/core';
import { SectionHeadingComponent } from '../../shared/section-heading/section-heading.component';
import { PORTFOLIO } from '../../data/portfolio.data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [SectionHeadingComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  readonly contact = PORTFOLIO.contact;
}
