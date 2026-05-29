import { Component } from '@angular/core';
import { HomeComponent } from '../../features/home/home.component';
import { TimelineComponent } from '../../features/timeline/timeline.component';
import { ProjectsComponent } from '../../features/projects/projects.component';
import { SkillsComponent } from '../../features/skills/skills.component';
import { ContactComponent } from '../../features/contact/contact.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    HomeComponent,
    TimelineComponent,
    ProjectsComponent,
    SkillsComponent,
    ContactComponent,
  ],
  template: `
    <app-home></app-home>
    <app-timeline></app-timeline>
    <app-projects></app-projects>
    <app-skills></app-skills>
    <app-contact></app-contact>
  `,
})
export class HomePageComponent {}
