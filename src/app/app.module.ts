import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { TeamComponent } from './pages/aboutus/team/team.component';

import { GetjsonfileService } from './services/getjsonfile.service';
import { ConstitutionComponent } from './pages/aboutus/constitution/constitution.component';
import { ThreecolComponent } from './helper/home/threecol/threecol.component';
import { DonationsComponent } from './helper/home/donations/donations.component';

import { LatesteventsComponent } from './helper/home/latestevents/latestevents.component';
import { VolunteerComponent } from './helper/home/volunteer/volunteer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactusComponent,
    TeamComponent,
    ConstitutionComponent,
    ThreecolComponent,
    DonationsComponent,
    LatesteventsComponent,
    VolunteerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GetjsonfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
