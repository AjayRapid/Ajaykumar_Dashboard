import { Component, Input, OnInit } from '@angular/core';
import { NewUser } from '../interfaces/dashboard-response-data';

@Component({
  selector: 'app-new-user-list',
  templateUrl: './new-user-list.component.html',
  styleUrls: ['./new-user-list.component.scss']
})
export class NewUserListComponent implements OnInit {
    @Input()userData : NewUser[] = [];
  
    constructor(
    ){
  
    }
  
    ngOnInit(): void {
  
    }
  
  }
  