import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserStory } from '../models/user-story';
import { StoryRepository } from '../repositories/story-repository';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {

  stories:UserStory[] = [];
  storyForm: FormGroup = new FormGroup({});

  constructor(private storyRepository: StoryRepository) { }

  ngOnInit(): void {    

    this.loadStories();
    console.log(this.stories);

    this.storyForm = new FormGroup({
      userName: new FormControl('', [Validators.required, Validators.minLength(5)]),
      caption: new FormControl('', [Validators.required, Validators.minLength(5)]),
      description: new FormControl('', [Validators.required, Validators.minLength(10)])
    });
  }

  loadStories(): void {
    this.stories = this.storyRepository.getStories();
  }

  saveStory(): void {
    console.log(this.storyForm.value);
    this.storyRepository.addStory(this.storyForm.value);
    this.loadStories();
  }
}
