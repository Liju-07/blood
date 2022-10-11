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
import { ViewallComponent } from './viewall/viewall.component';
import { HttpClientModule} from '@angular/common/http';


const appRoute:Routes=[
  {
    path:"",component:BloodComponent
  },
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
  },
  {
    path:"view",component:ViewallComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    BloodComponent,
    NavbarComponent,
    AddDonorComponent,
    SearchDonorComponent,
    DeleteDonorComponent,
    ViewallComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
