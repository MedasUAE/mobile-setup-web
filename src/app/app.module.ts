
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routes';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component'
import { DashboardComponent } from './dashboard/dashboard.component';;
import { LoginService } from './services/login.service';
import { LayoutService } from './services/layout.service';
import { MainComponent } from './main/main.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';


// dynamic form builder

import { DynamicFormBuilderModule } from './dynamic-form-builder/dynamic-form-builder.module';
import { LayoutComponent } from './layout/layout.component';
import { ClientComponent } from './client/client.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    MainComponent,
    NavComponent, 
    HeaderComponent,
    FooterComponent, 
    RegisterComponent, 
    LayoutComponent, 
    ClientComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    routing, 
    HttpModule,
    DynamicFormBuilderModule,
    FormsModule
    
  ],
  providers: [
    LoginService,
    LayoutService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
