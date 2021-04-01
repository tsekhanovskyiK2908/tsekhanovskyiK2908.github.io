import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { ProductsModule } from './products/products.module';
import { CustomersModule } from './customers/customers.module';
import { OrdersModule } from './orders/orders.module';
import { OrderStateService } from './orders/state/order-state-service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ProductsAltModule } from './products-alt/products-alt.module';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './products-alt/store/effects/products.effects';
// import { environment } from '../../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ProductsModule,
    ProductsAltModule,
    CustomersModule,
    OrdersModule,
    BrowserAnimationsModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot(reducers, { metaReducers, 
      runtimeChecks: {
      strictStateImmutability: true,
      strictActionImmutability: true,
    } }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: false,
      features: {
        pause: false,
        lock: true,
        persist: true
      }
    })
    // SharedModule
  ],
  providers: [OrderStateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
