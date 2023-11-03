import { Component, Input, OnInit } from '@angular/core';
import { TopCard } from '../interfaces/dashboard-response-data';

@Component({
  selector: 'app-top-data-card',
  templateUrl: './top-data-card.component.html',
  styleUrls: ['./top-data-card.component.scss']
})
export class TopDataCardComponent implements OnInit {
  @Input()cardData : TopCard[] = [];

  constructor(
  ){

  }

  ngOnInit(): void {

  }

}
