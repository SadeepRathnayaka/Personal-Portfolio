import { Component, Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Project, ProjectCategory } from '../../data/portfolio.models';

const CATEGORY_LABELS: Record<ProjectCategory, string> = {
  software: 'Software',
  robotics: 'Robotics',
  ml: 'Machine Learning',
};

const MAX_VISIBLE_TECH = 6;

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink],
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent {
  @Input() project!: Project;

  readonly maxVisibleTech = MAX_VISIBLE_TECH;

  imageUrl(path: string): string {
    return path.split(' ').join('%20');
  }

  get categoryLabel(): string {
    return CATEGORY_LABELS[this.project.category];
  }

  get visibleTech(): string[] {
    return this.project.tech.slice(0, MAX_VISIBLE_TECH);
  }

  get hiddenTechCount(): number {
    return Math.max(0, this.project.tech.length - MAX_VISIBLE_TECH);
  }

  get hasLinks(): boolean {
    return this.project.links.length > 0;
  }

  get isCurrent(): boolean {
    return this.project.badge === 'current';
  }
}
