import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryEditingComponent } from './country-editing/country-editing.component';
import { CountryListingComponent } from './country-listing/country-listing.component';
import { CountryRoutingModule } from './country-routing.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { SharedModule } from '../shared/shared.module';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MillionPipe } from '../shared/pipes/million.pipe';



@NgModule({
  declarations: [CountryEditingComponent, CountryListingComponent],
  imports: [
    CommonModule,
    SharedModule,
    CountryRoutingModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule
  ]
})
export class CountryModule { }
