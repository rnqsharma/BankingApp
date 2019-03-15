import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { AuthGuard } from './auth.guard';
import { PersonalloanComponent } from './personalloan/personalloan.component';
import { HomeloanComponent } from './homeloan/homeloan.component';
import { CarloanComponent } from './carloan/carloan.component';
import { LoanserviceComponent } from './loanservice/loanservice.component';
import { AboutusComponent } from './aboutus/aboutus.component';

const routes: Routes = [
  {
    path: '',
    
    component: SigninComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'home',
    canActivate: [AuthGuard],
    component: HomeComponent,
    
     
    
  },
  {
    path: 'personalloan',
    // canActivate: [AuthGuard],
    component: PersonalloanComponent
  },
  {
    path: 'homeloan',
    // canActivate: [AuthGuard],
    component: HomeloanComponent
  },
  {
    path: 'carloan',
    // canActivate: [AuthGuard],
    component: CarloanComponent
  },
  {
    path: 'loanservice',
    // canActivate: [AuthGuard],
    component: LoanserviceComponent
  },
  {
    path: 'aboutus',
    // canActivate: [AuthGuard],
    component: AboutusComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
