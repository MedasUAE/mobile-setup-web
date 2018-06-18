
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';
import { NavComponent } from './nav/nav.component';


// Route Configuration
export const routes: Routes = [
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
    },
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'dashboard', component: MainComponent },
    { path: 'dashboard', component: NavComponent }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);