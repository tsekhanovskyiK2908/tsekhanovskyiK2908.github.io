import { NightLocation } from "../models/enums/night-location";
import { TourDifficulty } from "../models/enums/tour-difficulty";
import { Tour } from "../models/tour";

export class TourRepository {
    
    tours: Tour[] = [
        new Tour(1,'The sea explorer', 3, 30, 2, NightLocation.hotels, TourDifficulty.easy, 297),
        new Tour(2,'The forest hiker', 7, 40, 6, NightLocation.tents, TourDifficulty.medium, 497),
        new Tour(3,'The snow adventurer', 5, 15, 3, NightLocation.tents, TourDifficulty.hard, 897),
        new Tour(1,'The sea explorer', 3, 30, 2, NightLocation.hotels, TourDifficulty.easy, 297),
        new Tour(1,'The sea explorer', 3, 30, 2, NightLocation.hotels, TourDifficulty.easy, 297),
        new Tour(1,'The sea explorer', 3, 30, 2, NightLocation.hotels, TourDifficulty.easy, 297),
    ];

    getTours():Tour[] 
    {
        return this.tours;
    }
}

export default new TourRepository();