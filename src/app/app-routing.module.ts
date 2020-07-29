import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoutegaurdService } from './routegaurd.service';


import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { ProfileComponent } from './profile/profile.component';
import { TripsComponent } from './trips/trips.component';
import { BookingsComponent } from './bookings/bookings.component';
import { BooknowComponent } from './booknow/booknow.component';
import { FormComponent } from './booknow/form/form.component';
import { Package1Component } from './booknow/package1/package1.component';








const routes: Routes = [
  {path:"", redirectTo:'/Home', pathMatch:'full'},
  {path:'Home', component:HomeComponent},
  {path:'Aboutus', component:AboutusComponent},
  {path:'Services', component:ServicesComponent},
  {path:'Contact', component:ContactComponent},
  {path:'Login', component:LoginComponent},
  {path:'Myaccount', component:MyaccountComponent, 
  children:[

    {path:'Profile', component:ProfileComponent},
    {path:"", redirectTo:'Profile', pathMatch:'full'},
    {path:'Trips', component:TripsComponent},
    {path:'Bookings', component:BookingsComponent},
    {path:'**', redirectTo:'Profile',pathMatch:'full'},

]
},
  {path:'Booknow', component:BooknowComponent,
  children:[
    {path:'Form', component:FormComponent},
    {path:"", redirectTo:'Form' , pathMatch:'full'},
    {path:'Package1', component:Package1Component}

  ]

},
  {path:'Signup', component:SignupComponent},
  {path:'404', component: NotfoundComponent},
  
  {path:'**', redirectTo:'/404',pathMatch:'full'},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }