import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { TeamComponent } from './pages/aboutus/team/team.component';
import { ConstitutionComponent } from './pages/aboutus/constitution/constitution.component';
import { ContactusComponent } from './pages/contactus/contactus.component';

import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { CheckoutComponent } from './components/checkout/checkout.component';



const routes: Routes = [
//  { path: "", component: HomeComponent, pathMatch: 'full' }, 
  { path: "home", component: HomeComponent },
  { path: "team", component: TeamComponent, pathMatch: 'full'  },
  { path: "constitution", component: ConstitutionComponent, pathMatch: 'full'  },
  { path: "contactus", component: ContactusComponent, pathMatch: 'full'  },

  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  { path: 'checkout', component: CheckoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
