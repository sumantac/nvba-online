import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { TeamComponent } from './pages/aboutus/team/team.component';
import { ConstitutionComponent } from './pages/aboutus/constitution/constitution.component';
import { HistoryComponent } from './pages/aboutus/history/history.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { AgmComponent } from './pages/aboutus/agm/agm.component';

import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { TicketsComponent } from './components/tickets/tickets.component';

import { DurgapujaComponent } from './pages/durgapuja/durgapuja.component';
import { GalleryComponent } from './pages/gallery/gallery/gallery.component';
import { PastteamsComponent } from './pages/archive/pastteams/pastteams.component';
import { MagazinesComponent } from './pages/archive/magazines/magazines.component';
import { ReportsComponent } from './components/admin/reports/reports.component';
import { AlldetailsComponent } from './components/admin/alldetails/alldetails.component';

import { ConcertComponent } from './components/events/concert/concert.component';
import { EventscheckoutComponent } from './components/events/eventscheckout/eventscheckout.component';
import { SaraswatiComponent } from './pages/saraswati/saraswati.component';
import { EventticketsComponent } from './components/events/eventtickets/eventtickets.component';
import { PresidentsdeskComponent } from './pages/aboutus/presidentsdesk/presidentsdesk.component';
import { KobipronamComponent } from './pages/kobipronam/kobipronam.component';
import { FoodcheckoutComponent } from './components/foodcart/foodcheckout/foodcheckout.component';
import { PicnicComponent } from './pages/picnic/picnic.component';
import { EventsguidelinesComponent } from './pages/aboutus/eventsguidelines/eventsguidelines.component';
import { CaresComponent } from './pages/cares/cares.component';

import { ProposedconstitutionComponent } from './pages/archive/proposedconstitution/proposedconstitution.component';
import { UserDetailsCheckComponent } from './components/user-details-check/user-details-check.component';



const routes: Routes = [
  { path: "", component: SaraswatiComponent, pathMatch: 'full' }, 
  { path: "home", component: HomeComponent, pathMatch: 'full'  },
  { path: "team", component: TeamComponent, pathMatch: 'full'  },
  { path: "history", component: HistoryComponent, pathMatch: 'full'  },
  { path: "constitution", component: ConstitutionComponent, pathMatch: 'full'  },
  { path: "eventsguidelines", component: EventsguidelinesComponent, pathMatch: 'full'  },
  { path: "contactus", component: ContactusComponent, pathMatch: 'full'  },
  { path: "durgapuja", component: DurgapujaComponent, pathMatch: 'full'  },
  { path: "saraswatipuja", component: SaraswatiComponent, pathMatch: 'full'  },
  { path: "gallery", component: GalleryComponent, pathMatch: 'full'  },
  { path: "magazines", component: MagazinesComponent, pathMatch: 'full'  },
  { path: "pastteam", component: PastteamsComponent, pathMatch: 'full'  },
  { path: "agm", component: AgmComponent, pathMatch: 'full'  },
  { path: 'frompresidentsdesk', component: PresidentsdeskComponent },


  { path: 'sign-in', component: SignInComponent },
  { path: 'login', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard] }, 
  { path: 'membership', component: DashboardComponent, canActivate:[AuthGuard] }, 
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  { path: 'checkout', component: CheckoutComponent, canActivate:[AuthGuard] },
  // { path: 'tickets', component:TicketsComponent, canActivate:[AuthGuard] }, 

  { path: 'admin/reports', component:ReportsComponent, canActivate:[AuthGuard] },
  { path: 'admin/alldetails', component:AlldetailsComponent, canActivate:[AuthGuard] },

  // { path: 'concerttickets', component: ConcertComponent },
  // { path: 'concert', component: ConcertComponent },
  { path: 'concertcheckout', component: EventscheckoutComponent },         
  // { path: 'tickets', component: EventticketsComponent, canActivate:[AuthGuard] },kobipronam
  { path: 'kobipronam', component: KobipronamComponent },
  { path: 'foodcheckout', component: FoodcheckoutComponent },
  { path: 'picnic', component: PicnicComponent },
  { path: 'cares', component: CaresComponent },
  
  { path: 'proposedconstitution', component:ProposedconstitutionComponent, canActivate:[AuthGuard] },
  { path: 'user-details-check/:id', component: UserDetailsCheckComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
