import { Component, Input, OnInit } from '@angular/core';
import { RecentOrder } from '../interfaces/dashboard-response-data';
import { DashboardServiceService } from '../Services/dashboard-service.service';
import { MatDialog } from '@angular/material/dialog';
import { CustomerDetailsComponent } from '../customer-details/customer-details.component';

@Component({
  selector: 'app-recent-order',
  templateUrl: './recent-order.component.html',
  styleUrls: ['./recent-order.component.scss']
})
export class RecentOrderComponent implements OnInit {
  @Input() orderData: RecentOrder[] = [];


  constructor(private dialog: MatDialog) { }
  ngOnInit(): void {

  }

  openPopup(data: RecentOrder): void {
    console.log(data)
    this.dialog.open(CustomerDetailsComponent, {
      data ,
      width : "50%"
    });
  }


}
