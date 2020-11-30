import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { ApiService } from './services/api.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ShowDialogComponent } from './components/show-dialog/show-dialog.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { MatButtonModule } from '@angular/material/button';
import { SiderbarComponent } from './components/siderbar/siderbar.component';
import { RouterModule } from '@angular/router';
import { MillionPipe } from './pipes/million.pipe';



@NgModule({
  declarations: [ShowDialogComponent, FilterPipe, SortPipe, SiderbarComponent, MillionPipe],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    MatButtonModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    ShowDialogComponent,
    SiderbarComponent,
    FilterPipe,
    SortPipe,
    MillionPipe
  ],
  providers: [
    ApiService,
    DecimalPipe
  ]
})
export class SharedModule { }
