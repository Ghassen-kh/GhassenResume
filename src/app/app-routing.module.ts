import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ActivityComponent } from './activity/activity.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },

  {
    component: HomeComponent,
    path: 'home',
  },
  {
    component: HomeComponent,
    path: '*',
  },
  {
    component: AboutComponent,
    path: 'about',
  },
  {
    component: ActivityComponent,
    path: 'activity',
  },
  {
    component: ResumeComponent,
    path: 'resume',
  },
  {
    component: ContactsComponent,
    path: 'contacts',
  },
  {
    component: PortfolioComponent,
    path: 'portfolio',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
