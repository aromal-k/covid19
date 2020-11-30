import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryListingComponent } from './country-listing/country-listing.component';
import { CountryEditingComponent } from './country-editing/country-editing.component';

const routes: Routes = [
  { path: '', redirectTo: 'country-listing', pathMatch: 'full' },
  {
    path: 'country-listing',
    component: CountryListingComponent
  },
  {
    path: 'country-editing/:countryId',
    component: CountryEditingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountryRoutingModule { }

