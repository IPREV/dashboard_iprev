/* import { Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { DadosPrevidenciariosComponent } from './material-component/dados-previdenciarios/dados-previdenciarios.component';
import { GestaoComponent } from './material-component/gestao/gestao.component';
import { ProvaDeVidaComponent } from './material-component/prova-de-vida/prova-de-vida.component';
import { DashboardComponent } from './dashboard/dashboard.component';


export const AppRoutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: '',
        loadChildren:
          () => import('./material-component/material.module').then(m => m.MaterialComponentsModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
 
      {
        path: 'dados-previdenciarios',
        component: DadosPrevidenciariosComponent
      },
      {
        path:'gestao',
        component: GestaoComponent
      },
      {
        path:'prova-de-vida',
        component: ProvaDeVidaComponent
      },
      {
        path:'dashboard',
        component: DashboardComponent

      } 
    
    ]
  }
]; */



import { Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { Component } from '@angular/core';

export const AppRoutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: '',
        loadChildren:
          () => import('./material-component/material.module').then(m => m.MaterialComponentsModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
    ]
  }
];