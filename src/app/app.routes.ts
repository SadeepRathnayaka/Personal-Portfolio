import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProjectDetailComponent } from './features/projects/project-detail/project-detail.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent, title: 'Sadeep Rathnayaka | Full Stack Engineer' },
  {
    path: 'projects/:slug',
    component: ProjectDetailComponent,
    title: 'Project | Sadeep Rathnayaka',
  },
  { path: '**', redirectTo: '' },
];
