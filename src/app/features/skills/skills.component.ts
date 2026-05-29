import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { SectionHeadingComponent } from '../../shared/section-heading/section-heading.component';
import { PORTFOLIO } from '../../data/portfolio.data';
import { SkillItem } from '../../data/portfolio.models';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgFor, NgIf, SectionHeadingComponent],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  readonly categories = PORTFOLIO.skillCategories;

  iconClass(skill: SkillItem): string {
    if (skill.iconType === 'devicon') {
      return skill.icon + ' colored';
    }
    return skill.icon;
  }

  isCustomMysql(skill: SkillItem): boolean {
    return skill.icon === 'custom-mysql';
  }
}
