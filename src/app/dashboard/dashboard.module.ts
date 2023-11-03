import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TopDataCardComponent } from './top-data-card/top-data-card.component';
import { NewUserListComponent } from './new-user-list/new-user-list.component';
import { RecentOrderComponent } from './recent-order/recent-order.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    DashboardComponent,
    TopDataCardComponent,
    NewUserListComponent,
    RecentOrderComponent,
    CustomerDetailsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgApexchartsModule,
    MatDialogModule,
    MatButtonModule
  ]
})
export class DashboardModule { }
