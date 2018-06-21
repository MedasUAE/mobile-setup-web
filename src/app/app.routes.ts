
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';



// Route Configuration
export const routes: Routes = [
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
    },
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'main', component: MainComponent },
    { path: 'nav', component: NavComponent },
    { path: 'header', component: HeaderComponent },
    { path: 'footer', component: FooterComponent }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);