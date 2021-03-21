import { NightLocation } from "./enums/night-location";
import { TourDifficulty } from "./enums/tour-difficulty";

export class Tour {        
    id: number;
    duration: number;
    name: string;
    peopleNumber: number;
    guidesNumber: number;
    nightLocation: NightLocation;
    difficulty: TourDifficulty; 
    price: number;

    constructor(id: number, tourName: string, duration: number, peopleNumber: number, guidesNumber: number,
        nightLocation: NightLocation, difficulty: TourDifficulty, price: number)
    {
        this.id = id;
        this.duration = duration;
        this.name = tourName;
        this.peopleNumber = peopleNumber;
        this.guidesNumber = guidesNumber;
        this.nightLocation = nightLocation;
        this.difficulty = difficulty;
        this.price = price;
    }
}