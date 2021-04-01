import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductEditAltComponent } from './product-edit-alt/product-edit-alt.component';
import { ProductListAltComponent } from './product-list-alt/product-list-alt.component';
import { ProductViewAltComponent } from './product-view-alt/product-view-alt.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ProductsAltApiService } from './api/products-alt-api-service';
import { OrderApiService } from '../orders/api/order-api-service';
import { StoreModule } from '@ngrx/store';
import { productReducer } from './store/reducers/products.reducers';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './store/effects/products.effects';

const productAltRoutes: Routes = [
  {path: 'products-alt', component: ProductListAltComponent},
  {path: 'products-alt/create', component: ProductEditAltComponent},
  {path: 'products-alt/edit/:id', component: ProductEditAltComponent},
  {path: 'products-alt/view/:id', component: ProductViewAltComponent}
];

@NgModule({
  declarations: [ProductEditAltComponent, ProductListAltComponent, ProductViewAltComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(productAltRoutes),
    StoreModule.forFeature('products', productReducer),
    EffectsModule.forFeature([ProductEffects]),
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [ProductsAltApiService, OrderApiService],
})
export class ProductsAltModule { }
