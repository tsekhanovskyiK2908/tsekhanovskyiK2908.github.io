<template>
    <section class="section-tours">
    <div class="u-center-text u-margin-bottom-big">
        <h2 class="heading-secondary">
            Most popular tours
        </h2>
    </div>
    <div class="row row-3-col">
        <div v-for="tour in toursArray" v-bind:key="tour.id" class="card">
            <div class="card__side card__side--front">
                <div :class="`card__picture card__picture--${tour.id}`">
                </div>
                <h4 class="card__heading">
                    <span :class="`card__heading-span card__heading-span--${tour.id}`">
                        {{tour.name}}
                    </span>
                </h4>
                <div class="card__details">
                    <ul>
                        <li>{{tour.duration}} day tour</li>
                        <li>Up to {{tour.peopleNumber}} people</li>
                        <li>{{tour.guidesNumber}} tour guides</li>
                        <li>Sleep in {{tour.nightLocation}}</li>
                        <li>Difficulty: {{tour.difficulty}}</li>
                    </ul>
                </div>
            </div>
            <div :class="`card__side card__side--back card__side--back-${tour.id}`">
                <div class="card__cta">
                    <div class="card__price-box">
                        <p class="card__price-only">Only</p>
                        <p class="card__price-value">${{tour.price}}</p>
                    </div>
                    <a href="#" class="btn btn--white">Book now!</a>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<style scoped src="./Tours.scss" lang='scss'>

</style>

<script>
import Vue from 'vue';
import TourRepository from '@/repositories/tour-repository';
import { Tour } from '@/models/tour';
import Component from 'vue-class-component';

@Component
export default class Tours extends Vue {
    get toursArray() {
        return TourRepository.getTours();
    }
}

</script>
