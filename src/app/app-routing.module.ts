import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { ProfileComponent } from './profile/profile.component';







const routes: Routes = [
  {path:"", redirectTo:'/Home', pathMatch:'full'},
  {path:'Home', component:HomeComponent},
  {path:'Aboutus', component:AboutusComponent},
  {path:'Services', component:ServicesComponent},
  {path:'Contact', component:ContactComponent},
  {path:'Login', component:LoginComponent},
  {path:'Signup', component:SignupComponent},
  {path:'404', component: NotfoundComponent},
  {path:'Myaccont', component:MyaccountComponent,
  children:[
    {path:'Profile', component:ProfileComponent},
    {path:'', component:ProfileComponent}
    
  ]
},
  {path:'**', redirectTo:'/404'},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
