import { Component, OnInit } from '@angular/core';
import { StoryRepository } from '../repositories/story-repository';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {

  stories = new StoryRepository().getStories();
  constructor() { }

  ngOnInit(): void {
  }

}
