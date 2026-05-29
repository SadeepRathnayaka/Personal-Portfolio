import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { SectionHeadingComponent } from '../../shared/section-heading/section-heading.component';
import { ProjectCardComponent } from '../../shared/project-card/project-card.component';
import { PORTFOLIO } from '../../data/portfolio.data';
import { Project, ProjectCategory } from '../../data/portfolio.models';

type FilterCategory = 'all' | ProjectCategory;

const PINNED_SLUG = 'distributed-banking-platform';

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
    { id: 'software', label: 'Software Development' },
    { id: 'robotics', label: 'Robotics' },
    { id: 'ml', label: 'Machine Learning' },
  ];

  activeCategory: FilterCategory = 'all';
  readonly allProjects = PORTFOLIO.projects;

  get displayProjects(): Project[] {
    const filtered =
      this.activeCategory === 'all'
        ? [...this.allProjects]
        : this.allProjects.filter((p) => p.category === this.activeCategory);

    const pinned = filtered.find((p) => p.slug === PINNED_SLUG);
    if (!pinned) {
      return filtered;
    }

    return [pinned, ...filtered.filter((p) => p.slug !== PINNED_SLUG)];
  }

  setCategory(id: FilterCategory): void {
    this.activeCategory = id;
  }
}
