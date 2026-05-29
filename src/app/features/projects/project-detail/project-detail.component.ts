import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DomSanitizer, SafeResourceUrl, Title } from '@angular/platform-browser';
import { getProjectBySlug } from '../../../data/portfolio.data';
import { DetailSection, Project } from '../../../data/portfolio.models';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink],
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss'],
})
export class ProjectDetailComponent implements OnInit {
  project?: Project;

  constructor(
    private route: ActivatedRoute,
    private title: Title,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug') ?? '';
    this.project = getProjectBySlug(slug);
    if (this.project) {
      this.title.setTitle(`${this.project.title} | Sadeep Rathnayaka`);
    }
  }

  imageUrl(path: string): string {
    return path.split(' ').join('%20');
  }

  safeVideoUrl(section: DetailSection): SafeResourceUrl | null {
    if (!section.videoUrl) {
      return null;
    }
    return this.sanitizer.bypassSecurityTrustResourceUrl(section.videoUrl);
  }
}
