import { Routes } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { NavComponent } from './components/nav/nav.component';
import { RentasComponent } from './components/rentas/rentas.component';
import { RegisterComponent } from './components/register/register.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CommonModule } from '@angular/common';

export const routes: Routes = [
    { path: '', component: ParentComponent },
    { path: 'nav', component: NavComponent },
    { path: 'registro', component: RegisterComponent },
    { path: 'rentas', component: RentasComponent },
    { path: 'child', component: ChildComponent },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: '**', component: ErrorComponent },
];

