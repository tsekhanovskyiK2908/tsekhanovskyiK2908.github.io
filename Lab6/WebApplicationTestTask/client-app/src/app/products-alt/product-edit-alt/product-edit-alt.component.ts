import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/store/reducers';
import { ProductsAltApiService } from '../api/products-alt-api-service';
import { ProductCategory } from '../enums/product-category';
import { ProductModel } from '../models/product-model';
import { createProduct, getProduct, updateProduct } from '../store/actions/products.actions';
import { getProductSelector } from '../store/selectors/products.selectors';

@Component({
  selector: 'app-product-edit-alt',
  templateUrl: './product-edit-alt.component.html',
  styleUrls: ['./product-edit-alt.component.scss']
})
export class ProductEditAltComponent implements OnInit {

  creationMode: boolean;

  categories = ProductCategory;
  categoriesKeys: string[];
  productForm: FormGroup;

  productCreatedDate: number;
  productId: number;
  productModel: ProductModel;

  product$: Subscription;

  constructor(private productApiService: ProductsAltApiService,
    private store: Store<AppState>,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.categoriesKeys = Object.keys(this.categories).filter(Number);
    this.productId = +(this.route.snapshot.params['id']);

    if (isNaN(this.productId)) {
      this.creationMode = true;
      this.productId = 0;
      this.productCreatedDate = Date.now();
    }

    this.productForm = new FormGroup({
      id: new FormControl({value: '', disabled: true}),
      name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(255)]),
      productCategory: new FormControl('', [Validators.required, Validators.min(1)]),
      avaliableQuantity: new FormControl('', [Validators.required, Validators.min(0)]),
      price: new FormControl('', [Validators.required, Validators.min(0.01)]),
      description: new FormControl('')
    });

    if (!this.creationMode) {
      this.product$ = this.store.select(getProductSelector)
                                .subscribe(data => this.productModel = data);
      this.store.dispatch(getProduct({productId: this.productId}));

      this.productForm.patchValue(this.productModel);
      this.productCreatedDate = this.productModel.createdDate;

      console.log(this.productForm);
    } else {
      this.productForm.patchValue({id: this.productId});
    }
  }

  saveProduct(): void {
    let saved:boolean = false;

    if (this.creationMode) {
      this.productModel = this.productForm.value;
      this.store.dispatch(createProduct({productModel: this.productModel}));
    } else {
      this.productModel = this.productForm.value;
      this.productModel.id = this.productId;
      this.store.dispatch(updateProduct({productToUpdate: this.productModel}));
    }

    this.router.navigate(['products-alt']);
  }

  get name() {
    return this.productForm.get('name');
  }

  get productCategory() {
    return this.productForm.get('productCategory');
  }

  get avaliableQuantity() {
    return this.productForm.get('avaliableQuantity');
  }

  get price() {
    return this.productForm.get('price');
  }

}
