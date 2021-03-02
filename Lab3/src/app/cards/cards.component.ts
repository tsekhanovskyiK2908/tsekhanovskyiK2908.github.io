import { Component, OnInit } from '@angular/core';
import {TourRepository} from '../repositories/tour-repository';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  tours = new TourRepository().getTours().slice(0,3);
  constructor() { }

  ngOnInit(): void {
  }

}
