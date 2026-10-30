import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { SectionHeadingComponent } from '../../shared/section-heading/section-heading.component';
import { ProjectCardComponent } from '../../shared/project-card/project-card.component';
import { PORTFOLIO } from '../../data/portfolio.data';
import { Project, ProjectCategory } from '../../data/portfolio.models';

type FilterCategory = 'all' | ProjectCategory;

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor, SectionHeadingComponent, ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  readonly categories: { id: FilterCategory; label: string }[] = [
    { id: 'all', label: 'All' },
    { id: 'robotics', label: 'Robotics' },
    { id: 'ml', label: 'Machine Learning' },
    { id: 'software', label: 'Software Development' },
  ];

  // Robotics is shown first; project order follows portfolio.data.ts.
  activeCategory: FilterCategory = 'robotics';
  readonly allProjects = PORTFOLIO.projects;

  get displayProjects(): Project[] {
    return this.activeCategory === 'all'
      ? this.allProjects
      : this.allProjects.filter((p) => p.category === this.activeCategory);
  }

  setCategory(id: FilterCategory): void {
    this.activeCategory = id;
  }
}
