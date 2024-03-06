import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// ================== Componenets ==================
// ==== shared
import { NavbarComponent } from './Theme/shared/navbar/navbar.component';
import { FooterComponent } from './Theme/shared/footer/footer.component';
// ==== main
import { HomeComponent } from './Theme/main/home/home.component';
import { ContactComponent } from './Theme/main/contact/contact.component';
import { PortfolioComponent } from './Theme/main/portfolio/portfolio.component';
import { ReelsComponent } from './Theme/main/reels/reels.component';
import { AboutUsComponent } from './Theme/main/about-us/about-us.component';
// ==== job
import { JobCategoriesComponent } from './Theme/jobs/job-categories/job-categories.component';
import { JobAvailableComponent } from './Theme/jobs/job-available/job-available.component';
import { JobDetailsComponent } from './Theme/jobs/job-details/job-details.component';
// ==== profile
import { ProfileComponent } from './Theme/user/profile/profile.component';
import { EditProfileComponent } from './Theme/user/edit-profile/edit-profile.component';
import { TrackApplicationComponent } from './Theme/user/track-application/track-application.component';
// ==== Access (Login & Register)
import { AccessComponent } from './Theme/access/access.component';
// ==== 404 Page
import { Error404Component } from './Theme/error404/error404.component';
// ================== Modules ========================
// ==== Forms
import { FormsModule } from '@angular/forms';
// ==== Swipper
import { SwiperModule } from 'swiper/angular';
import { SoftwareHouseComponent } from './Theme/solutions/software-house/software-house.component';
import { DigitalMarketingComponent } from './Theme/solutions/digital-marketing/digital-marketing.component';
import { MarketingBusinessComponent } from './Theme/solutions/marketing-business/marketing-business.component';
import { ResourcesComponent } from './Theme/main/resources/resources.component';
import { ProjectComponent } from './Theme/main/project/project.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    PortfolioComponent,
    ReelsComponent,
    AboutUsComponent,
    JobCategoriesComponent,
    JobAvailableComponent,
    JobDetailsComponent,
    ProfileComponent,
    EditProfileComponent,
    TrackApplicationComponent,
    AccessComponent,
    Error404Component,
    SoftwareHouseComponent,
    DigitalMarketingComponent,
    MarketingBusinessComponent,
    ResourcesComponent,
    ProjectComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, SwiperModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
