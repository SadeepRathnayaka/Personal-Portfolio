import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { SectionHeadingComponent } from '../../shared/section-heading/section-heading.component';
import { PORTFOLIO } from '../../data/portfolio.data';

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [NgFor, NgIf, SectionHeadingComponent],
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss'],
})
export class AchievementsComponent {
  readonly achievements = PORTFOLIO.achievements;
}
