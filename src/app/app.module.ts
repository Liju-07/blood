import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BloodComponent } from './blood/blood.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddDonorComponent } from './add-donor/add-donor.component';
import { SearchDonorComponent } from './search-donor/search-donor.component';
import { DeleteDonorComponent } from './delete-donor/delete-donor.component';
import { RouterModule, Routes } from '@angular/router';


const appRoute:Routes=[
  {
    path:"blood",component:BloodComponent
  },
  {
    path:"search",component:SearchDonorComponent
  },
  {
    path:"delete",component:DeleteDonorComponent
  },
  {
    path:"adddonor",component:AddDonorComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    BloodComponent,
    NavbarComponent,
    AddDonorComponent,
    SearchDonorComponent,
    DeleteDonorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
