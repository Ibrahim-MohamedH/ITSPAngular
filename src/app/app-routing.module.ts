import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Theme/main/home/home.component';
import { AccessComponent } from './Theme/access/access.component';
import { AboutUsComponent } from './Theme/main/about-us/about-us.component';
import { ContactComponent } from './Theme/main/contact/contact.component';
import { PortfolioComponent } from './Theme/main/portfolio/portfolio.component';
import { ReelsComponent } from './Theme/main/reels/reels.component';
import { JobCategoriesComponent } from './Theme/jobs/job-categories/job-categories.component';
import { JobAvailableComponent } from './Theme/jobs/job-available/job-available.component';
import { JobDetailsComponent } from './Theme/jobs/job-details/job-details.component';
import { ProfileComponent } from './Theme/user/profile/profile.component';
import { EditProfileComponent } from './Theme/user/edit-profile/edit-profile.component';
import { TrackApplicationComponent } from './Theme/user/track-application/track-application.component';
import { Error404Component } from './Theme/error404/error404.component';
import { SoftwareHouseComponent } from './Theme/solutions/software-house/software-house.component';
import { DigitalMarketingComponent } from './Theme/solutions/digital-marketing/digital-marketing.component';
import { MarketingBusinessComponent } from './Theme/solutions/marketing-business/marketing-business.component';
import { ResourcesComponent } from './Theme/main/resources/resources.component';
import { ProjectComponent } from './Theme/main/project/project.component';

const routes: Routes = [
  // Main Routes
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'home/:sectionId', component: HomeComponent },
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'reels', component: ReelsComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'project/:id', component: ProjectComponent },
  // Jobs Routes
  { path: 'job_categories', component: JobCategoriesComponent },
  { path: 'jobs/:category', component: JobAvailableComponent },
  { path: 'jobs/:category/:id', component: JobDetailsComponent },
  // Access Routes
  { path: 'access', component: AccessComponent },
  // User Routes
  { path: 'profile', component: ProfileComponent },
  { path: 'edit_profile', component: EditProfileComponent },
  { path: 'track_jobs', component: TrackApplicationComponent },
  // Houses
  { path: 'softwareHouse', component: SoftwareHouseComponent },
  { path: 'digitalMarketing', component: DigitalMarketingComponent },
  { path: 'marketingBusiness', component: MarketingBusinessComponent },

  // Page not Found
  { path: '**', component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
