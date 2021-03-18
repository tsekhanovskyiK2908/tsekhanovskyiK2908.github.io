import React, { ChangeEvent, ChangeEventHandler, Component, FormEvent } from 'react';
import './Stories.scss';
import storyRepository from '../../repositories/story-repository';
import { UserStory } from '../../models/user-story';
import personImg from '../../assets/img/nat-8.jpg';

export class Stories extends Component<{}, {fullName: string, impression: string, description: string}> {
  stories: UserStory[] = storyRepository.getStories();

  constructor(props: any) {
    super(props);
    this.state = {
      fullName: '',
      impression: '',
      description: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event: FormEvent<HTMLElement>) {
    event.preventDefault();
    console.log(this.state);
    storyRepository.addStory(new UserStory(0,this.state.fullName, this.state.impression, this.state.description));
    this.forceUpdate();
  }

  handleChange(event: FormEvent<HTMLElement>): void {
    let target = (event.target as HTMLInputElement);
    
    let name = target.name;
    let value = target.value;

    if(value === null || value === '') {
      alert('must be filled');
    }

    if(name === 'fullName') {
      this.setState({[name]: value});
    } else if(name === 'impression') {
      this.setState({[name]: value});
    } else if(name === 'description') {
      this.setState({[name]: value});
    }
  }

  StoryList(props: { stories: UserStory[]; }): any {
    const stories = props.stories;
    const storiesBlocks = stories.map((story: UserStory) =>
      <div className="story">
        <figure className="story__shape">
          <img src={personImg} alt="Person on a tour" className="story__img" />
          <figcaption className="story__caption">
            {story.userName}
          </figcaption>
        </figure>
        <div className="story__text">
          <h3 className="heading-tertiary u-margin-bottom-small">{story.caption}</h3>
          <p>
            {story.description}
          </p>
        </div>
      </div>
    );

    return storiesBlocks;
  }

  render() {
    return (
      <React.Fragment>
        <section className='section-stories'>
          <div className="bg-video">
            <video className="bg-video__content" autoPlay muted loop>
              <source src={'../../assets/img/video.mp4'} type="video/mp4" />
              <source src={'../../assets/img/video.webm'} type="video/webm" />
            </video>
          </div>
          <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">
              We make people genuinely happy
          </h2>
          </div>
          <div className="story__block">
            <this.StoryList stories={this.stories}/>
          </div>
          <div className="u-center-text u-margin-top-very-big">
            <a href="#" className="btn-text">Read all stories &rarr;</a>
          </div>
        </section>
        <section>
          <div className="book">
            <div className="book__form">
              <form className="form" onSubmit={this.handleSubmit}>
                <div className="u-margin-bottom-medium">
                  <h2 className="heading-secondary heading-blue">
                    Give us your feedback
                  </h2>
                </div>
                <div className="form__group">
                  <input type="text" className="form__input" placeholder="Full Name" name="fullName" onChange={this.handleChange} required /> 
                  <label htmlFor="fullName" className="form__label"></label>
                </div>
                <div className="form__group">
                  <input type="text" className="form__input" placeholder="Brightest impression" name="impression" onChange={this.handleChange} required />
                  <label htmlFor="impression" className="form__label"></label>
                </div>
                <div className="form__group">
                  <input className="form__textarea" placeholder="Description" name="description" onChange={this.handleChange} required></input>
                  <label htmlFor="description" className="form__label"></label>
                </div>
                <div className="form__group">
                  <button className="btn btn--blue" type="submit">Add Feedback</button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Stories;