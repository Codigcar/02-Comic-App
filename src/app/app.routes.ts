import { RouterModule, Routes } from '@angular/router';
import { Component } from '@angular/core';
import { HomeComponent } from "./components/home/home.component";

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '**', pathMatch:'full', redirectTo: 'home' }
];

export const appRouting = RouterModule.forRoot(routes, { useHash:true });