import React, { Component } from 'react';
import './Tours.scss';
import tourRepositry from '../../repositories/tour-repository';
import { Tour } from '../../models/tour';

export class Tours extends Component {
  tours: Tour[] = tourRepositry.getTours();
  
  CardsList(props: { tours: Tour[]; }):any {
    const tours = props.tours;
    const toursCards = tours.map((tour: Tour) => 
      <div className="card" key={tour.toString()}>
        <div className="card__side card__side--front">
          <div className={`card__picture card__picture--${tour.id}`}>
          </div>
          <h4 className="card__heading">
            <span className={`card__heading-span card__heading-span--${tour.id}`}>
              {tour.name}
            </span>
          </h4>
          <div className="card__details">
            <ul>
              <li>{tour.duration} day tour</li>
              <li>Up to {tour.peopleNumber} people</li>
              <li>{tour.guidesNumber} tour guides</li>
              <li>Sleep in {tour.nightLocation}</li>
              <li>Difficulty: {tour.difficulty}</li>
            </ul>
          </div>
        </div>
        <div className={`card__side card__side--back card__side--back-${tour.id}`}>
          <div className="card__cta">
            <div className="card__price-box">
              <p className="card__price-only">Only</p>
              <p className="card__price-value">${tour.price}</p>
            </div>
            <a href="#" className="btn btn--white">Book now!</a>
          </div>
        </div>
      </div>
    );

    return(
      <section className="section-tours">
        <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary">
            Most popular tours
        </h2>
        </div>
        <div className="row row-3-col">
          {toursCards}
        </div>
      </section>
    );

  }

  render() {
    return (
      <this.CardsList tours={this.tours}/>
    );
  }
}

export default Tours;
