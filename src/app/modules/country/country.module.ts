import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountryRoutingModule } from './country-routing.module';
import { CountryComponent } from './components/country/country.component';

import { MatTableModule } from "@angular/material/table";
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from "@angular/material/paginator";
@NgModule({
  declarations: [
    CountryComponent
  ],
  imports: [
    CommonModule,
    CountryRoutingModule, MatTableModule, MatSortModule, MatPaginatorModule
  ]
})
export class CountryModule { }
