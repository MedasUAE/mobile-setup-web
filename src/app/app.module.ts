
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routes';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component'
import { DashboardComponent } from './dashboard/dashboard.component';;
import { LoginService } from './services/login.service';
import { MainComponent } from './main/main.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent, DashboardComponent, MainComponent, NavComponent, HeaderComponent, FooterComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule, routing, HttpModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
