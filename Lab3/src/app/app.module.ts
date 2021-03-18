import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CardsComponent } from './cards/cards.component';
import { AboutComponent } from './about/about.component';
import { FeaturesComponent } from './features/features.component';
import { StoriesComponent } from './stories/stories.component';
import { BookingComponent } from './booking/booking.component';
import { StoryRepository } from './repositories/story-repository';
import { TourRepository } from './repositories/tour-repository';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CardsComponent,
    AboutComponent,
    FeaturesComponent,
    StoriesComponent,
    BookingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [StoryRepository, TourRepository],
  bootstrap: [AppComponent]
})
export class AppModule { }
