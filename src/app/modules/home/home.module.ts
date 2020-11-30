import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';


const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard', loadChildren: () => import('../dashboard/dashboard.module').then(mod => mod.DashboardModule)
      },
      {
        path: 'country', loadChildren: () => import('../country/country.module').then(mod => mod.CountryModule)
      },
    ]
  }
];
@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class HomeModule { }
