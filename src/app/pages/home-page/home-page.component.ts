import { Component } from '@angular/core';
import { HomeComponent } from '../../features/home/home.component';
import { TimelineComponent } from '../../features/timeline/timeline.component';
import { ProjectsComponent } from '../../features/projects/projects.component';
import { AchievementsComponent } from '../../features/achievements/achievements.component';
import { SkillsComponent } from '../../features/skills/skills.component';
import { ContactComponent } from '../../features/contact/contact.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    HomeComponent,
    TimelineComponent,
    ProjectsComponent,
    AchievementsComponent,
    SkillsComponent,
    ContactComponent,
  ],
  template: `
    <app-home></app-home>
    <app-projects></app-projects>
    <app-timeline></app-timeline>
    <app-achievements></app-achievements>
    <app-skills></app-skills>
    <app-contact></app-contact>
  `,
})
export class HomePageComponent {}
