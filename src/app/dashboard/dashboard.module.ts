import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DemoMaterialModule } from '../demo-material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutes } from './dashboard.routing';
import { ChartistModule } from 'ng-chartist';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgbModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [
    CommonModule,
    DemoMaterialModule,
    FlexLayoutModule,
    ChartistModule,
    MDBBootstrapModule.forRoot(),
    NgbModule,
    NgbModalModule,
    RouterModule.forChild(DashboardRoutes)
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule {}

