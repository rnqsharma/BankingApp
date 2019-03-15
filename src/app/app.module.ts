import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { RestService } from './rest.service';
import { SigninComponent } from './signin/signin.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { PersonalloanComponent } from './personalloan/personalloan.component';
import { HomeloanComponent } from './homeloan/homeloan.component';
import { CarloanComponent } from './carloan/carloan.component';
import { LoanserviceComponent } from './loanservice/loanservice.component';
import { AboutusComponent } from './aboutus/aboutus.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    SigninComponent,
    FooterComponent,
    PersonalloanComponent,
    HomeloanComponent,
    CarloanComponent,
    LoanserviceComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    ReactiveFormsModule, 
    FormsModule
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
