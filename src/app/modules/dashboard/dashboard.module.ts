import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../dashboard/components/dashboard';
import { DataService } from './services/data';

@NgModule({

  imports: [
    CommonModule
  ],
  declarations: [
    DashboardComponent,

  ],
  exports: [
    DashboardComponent
  ],
  providers: [
    DataService
  ]
})
export class DashboardModule { }
