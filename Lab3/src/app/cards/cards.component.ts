import { Component, OnInit } from '@angular/core';
import { Tour } from '../models/tour';
import {TourRepository} from '../repositories/tour-repository';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  tours: Tour[] = [];
  constructor(private tourRepository: TourRepository) { }

  ngOnInit(): void {
    this.tours = this.tourRepository.getTours();
  }

}
