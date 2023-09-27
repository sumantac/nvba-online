import { NgModule } from '@angular/core';

import { BrowserModule  } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { SponsersComponent } from './helper/home/sponsers/sponsers.component';


import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { AuthService } from "./shared/services/auth.service";
import { ProfileComponent } from './helper/dashboard/profile/profile.component';
import { CartmemberComponent } from './helper/dashboard/cartmember/cartmember.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CheckoutComponent } from './components/checkout/checkout.component';

import { ToastrModule } from 'ngx-toastr';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AccordionModule } from 'ngx-bootstrap/accordion';

import { NgxPayPalModule } from 'ngx-paypal';
import { CartticketsComponent } from './helper/dashboard/carttickets/carttickets.component';
import { DurgapujaComponent } from './pages/durgapuja/durgapuja.component';
import { HistoryComponent } from './pages/aboutus/history/history.component';
import { GalleryComponent } from './pages/gallery/gallery/gallery.component';
import { PastteamsComponent } from './pages/archive/pastteams/pastteams.component';
import { MagazinesComponent } from './pages/archive/magazines/magazines.component';
import { Durgapujatickets2022Component } from './helper/tickets/durgapujatickets2022/durgapujatickets2022.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import { ReportsComponent } from './components/admin/reports/reports.component';

import { AgGridModule } from 'ag-grid-angular';
import { AlldetailsComponent } from './components/admin/alldetails/alldetails.component';
import { ConcertComponent } from './components/events/concert/concert.component';
import { EventscheckoutComponent } from './components/events/eventscheckout/eventscheckout.component';
import { AgmComponent } from './pages/aboutus/agm/agm.component';
import { SaraswatiComponent } from './pages/saraswati/saraswati.component';
import { EventticketsComponent } from './components/events/eventtickets/eventtickets.component';
import { PresidentsdeskComponent } from './pages/aboutus/presidentsdesk/presidentsdesk.component';
import { KobipronamComponent } from './pages/kobipronam/kobipronam.component';
import { FoodticketsComponent } from './components/foodcart/foodtickets/foodtickets.component';
import { FoodcheckoutComponent } from './components/foodcart/foodcheckout/foodcheckout.component';
import { PicnicComponent } from './pages/picnic/picnic.component';
import { EventsguidelinesComponent } from './pages/aboutus/eventsguidelines/eventsguidelines.component';
import { Durgapujatickets2023Component } from './helper/tickets/durgapujatickets2023/durgapujatickets2023.component';


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
    VolunteerComponent,
    SponsersComponent,
    DashboardComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    CartmemberComponent,
    CheckoutComponent,
    ProfileComponent,
    CartticketsComponent,
    DurgapujaComponent,
    HistoryComponent,
    GalleryComponent,
    PastteamsComponent,
    MagazinesComponent,
    Durgapujatickets2022Component,
    TicketsComponent,
    ReportsComponent,
    AlldetailsComponent,
    ConcertComponent,
    EventscheckoutComponent,
    AgmComponent,
    SaraswatiComponent,
    EventticketsComponent,
    PresidentsdeskComponent,
    KobipronamComponent,
    FoodticketsComponent,
    FoodcheckoutComponent,
    PicnicComponent,
    EventsguidelinesComponent,
    Durgapujatickets2023Component,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    //fire
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot({
      timeOut: 50000,
      positionClass: 'toast-top-center',
      closeButton: true,
      preventDuplicates: true,
    }), // ToastrModule added
    CarouselModule.forRoot(),
    ModalModule.forRoot(),
    AccordionModule.forRoot(),
    NgxPayPalModule,
    AgGridModule
  ],
  providers: [GetjsonfileService, AuthService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
