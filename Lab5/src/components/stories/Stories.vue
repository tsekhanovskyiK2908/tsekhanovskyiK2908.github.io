<template>
  <fragment>
    <section class="section-stories">
      <div class="bg-video">
        <video class="bg-video__content" autoplay muted loop>
          <source src="../../assets/img/video.mp4" type="video/mp4" />
          <source src="../../assets/img/video.webm" type="video/webm" />
        </video>
      </div>
      <div class="u-center-text u-margin-bottom-big">
        <h2 class="heading-secondary">We make people genuinely happy</h2>
      </div>
      <div class="story__block">
        <div v-for="story of storiesArray" :key="story.id" class="story">
          <figure class="story__shape">
            <img
              src="../../assets/img/nat-9.jpg"
              alt="Person on a tour"
              class="story__img"
            />
            <figcaption class="story__caption">
              {{ story.userName }}
            </figcaption>
          </figure>
          <div class="story__text">
            <h3 class="heading-tertiary u-margin-bottom-small">
              {{ story.caption }}
            </h3>
            <p>
              {{ story.description }}
            </p>
          </div>
        </div>
      </div>
      <div class="u-center-text u-margin-top-very-big">
        <a href="#" class="btn-text">Read all stories &rarr;</a>
      </div>
    </section>
    <section class="section-book">
      <div class="book">
        <div class="book__form">
          <form class="form">
            <div class="u-margin-bottom-medium">
              <h2 class="heading-secondary heading-blue">
                Tell us your experience
              </h2>
            </div>
            <div class="form__group">
              <input
                type="text"
                class="form__input"
                placeholder="Full Name"
                id="fullName"
                v-model="fullName"
                required
              />
              <label for="fullName" class="form__label"></label>
            </div>
            <div class="form__group">
              <input
                type="email"
                class="form__input"
                placeholder="Brightest impression"
                id="impression"
                v-model="impression"
                required
              />
              <label for="impression" class="form__label"></label>
            </div>
            <div class="form__group">
              <textarea
                type="text"
                class="form__textarea"
                placeholder="Description"
                id="description"
                v-model="description"
                required
              ></textarea>
              <label for="description" class="form__label"></label>
            </div>
            <div class="form__group">
              <button
                class="btn btn--blue"
                type="submit"
                @click.prevent="onSubmit()"
              >
                Send Feedback
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </fragment>
</template>

<style scoped src="./Stories.scss" lang='scss'>
</style>

<script>
import Vue from "vue";
import StoryRepository from "@/repositories/story-repository";
import Component from "vue-class-component";
import { UserStory } from "@/models/user-story";
import Fragment from 'vue-fragment'
Vue.use(Fragment.Plugin)

@Component
export default class Stories extends Vue {
  fullName = "";
  impression = "";
  description = "";

  get storiesArray() {
    return StoryRepository.getStories();
  }

  onSubmit() {
    StoryRepository.addStory(
      new UserStory(100, this.fullName, this.impression, this.description)
    );
    this.$forceUpdate();
  }
}
</script>