import React, { Component } from 'react';
import './About.scss';

import nat1 from '../../assets/img/nat-1.jpg';
import nat1large from '../../assets/img/nat-1-large.jpg';
import nat2 from '../../assets/img/nat-2.jpg';
import nat2large from '../../assets/img/nat-2-large.jpg';
import nat3 from '../../assets/img/nat-3.jpg';
import nat3large from '../../assets/img/nat-3-large.jpg';


export class About extends Component {
  imgsSrcSets:string[] = [
    `${nat1} 300w, ${nat1large} 1000w`,
    `${nat2} 300w, ${nat2large} 1000w`,
    `${nat3} 300w, ${nat3large} 1000w`
  ]
  
  render() {
    return (
      <section className="section-about">
        <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary">
            Exsiting tours for adventurous people
        </h2>
        </div>
        <div className="row row-2-col">
          <div className="row-item">
            <h3 className="heading-tertiary u-margin-bottom-small">You're going to fall in love with nature</h3>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda aut cumque, nobis facilis aperiam tempore rerum? Deleniti doloremque nisi laboriosam adipisci animi possimus, voluptatem accusamus accusantium repellendus ipsam beatae illum.
            </p>
            <h3 className="heading-tertiary u-margin-bottom-small">Live adventures like you never have before</h3>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda aut cumque, nobis facilis aperiam tempore rerum? Deleniti doloremque nisi laboriosam adipisci animi possimus, voluptatem accusamus accusantium repellendus ipsam beatae illum.
            </p>
            <a href="#" className="btn-text">Learn more &rarr;</a>
          </div>
          <div className="row-item">
            <div className="composition">
              <img srcSet={this.imgsSrcSets[0]}
                sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                alt="Photo 1"
                className="composition__photo composition__photo--p1"
                src={nat1} />
              <img srcSet={this.imgsSrcSets[1]}
                sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                alt="Photo 2"
                className="composition__photo composition__photo--p2"
                src={nat2} />
              <img srcSet={this.imgsSrcSets[2]}
                sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                alt="Photo 3"
                className="composition__photo composition__photo--p3"
                src={nat3} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default About;
