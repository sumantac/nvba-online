import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ContactusComponent } from './pages/contactus/contactus.component';

const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: 'full' }, 
  { path: "home", component: HomeComponent },
  { path: "contactus", component: ContactusComponent, pathMatch: 'full'  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
