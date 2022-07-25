import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { TeamComponent } from './pages/aboutus/team/team.component';
import { ConstitutionComponent } from './pages/aboutus/constitution/constitution.component';
import { ContactusComponent } from './pages/contactus/contactus.component';


const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: 'full' }, 
  { path: "home", component: HomeComponent },
  { path: "team", component: TeamComponent, pathMatch: 'full'  },
  { path: "constitution", component: ConstitutionComponent, pathMatch: 'full'  },
  { path: "contactus", component: ContactusComponent, pathMatch: 'full'  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
