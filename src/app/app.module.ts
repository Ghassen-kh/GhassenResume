import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ActivityComponent } from './activity/activity.component';
import { ResumeComponent } from './resume/resume.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactsComponent } from './contacts/contacts.component';

import { ResumeActivityComponent } from './resume/resume-activity/resume-activity.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ResumeActivityContentComponent } from './resume/resume-activity-content/resume-activity-content.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { CertificateContentComponent } from './certificate-content/certificate-content.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ActivityComponent,
    ResumeComponent,
    PortfolioComponent,
    ContactsComponent,
    ResumeActivityComponent,
    ResumeActivityContentComponent,
    CertificateContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatExpansionModule,
    MatCardModule,
    MatIconModule,
    BrowserAnimationsModule,
    InfiniteScrollModule,
    MatButtonModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
