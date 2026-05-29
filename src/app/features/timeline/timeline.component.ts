import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { SectionHeadingComponent } from '../../shared/section-heading/section-heading.component';
import { PORTFOLIO } from '../../data/portfolio.data';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [NgFor, NgIf, SectionHeadingComponent],
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent {
  readonly events = PORTFOLIO.timeline;
}
