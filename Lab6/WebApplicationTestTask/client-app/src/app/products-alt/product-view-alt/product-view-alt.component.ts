import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { ProductsAltApiService } from '../api/products-alt-api-service';
import { ProductModel } from '../models/product-model';
import { getProduct } from '../store/actions/products.actions';
import { getProductSelector } from '../store/selectors/products.selectors';

@Component({
  selector: 'app-product-view-alt',
  templateUrl: './product-view-alt.component.html',
  styleUrls: ['./product-view-alt.component.scss']
})
export class ProductViewAltComponent implements OnInit {

  productModel: ProductModel;
  productId: number;

  product$ = this.store.select(getProductSelector).subscribe(product => 
    this.productModel = product)


  constructor(private productsApiService: ProductsAltApiService, 
              private store: Store<AppState>, 
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.productId = +(this.route.snapshot.params['id']);

    if(isNaN(this.productId)) {
      this.router.navigate(['/products-alt/']);
    }

    this.store.dispatch(getProduct({productId: this.productId}))
  }

}
