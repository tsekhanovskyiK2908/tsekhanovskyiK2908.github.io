import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, map, tap } from 'rxjs/operators';
import { ProductsAltApiService } from '../../api/products-alt-api-service';
import { productActionTypes } from '../actions/products.actions';

@Injectable()
export class ProductEffects {
  constructor(
    private productApiService: ProductsAltApiService,
    private actions$: Actions,
    private router: Router
  ) {}

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(productActionTypes.getProducts),
      concatMap(() => this.productApiService.getAllProducts()),
      map((productModels) =>
        productActionTypes.getProductsSuccess({ productModels })
      )
    )
  );

  loadProduct$ = createEffect(() => 
    this.actions$.pipe(
      ofType(productActionTypes.getProduct),
      concatMap((action) => this.productApiService.getProduct(action.productId)),
      map((productModel) => productActionTypes.getProductSuccess({product: productModel}))
    )
  )

  createProduct$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(productActionTypes.createProduct),
        concatMap((action) =>
          this.productApiService.createProduct(action.productModel)
        ),
        tap(() => this.router.navigateByUrl('/products-alt'))
      ),
    { dispatch: false }
  );

  deleteProduct$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(productActionTypes.deleteProduct),
        concatMap((action) =>
          this.productApiService.deleteProduct(action.productId)
        )
      ),
    { dispatch: false }
  );

  updateProduct$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(productActionTypes.updateProduct),
        concatMap((action) =>
          this.productApiService.updateProduct(action.productToUpdate)
        ),
        map((updatedProductModel) =>
          productActionTypes.updateProductSuccess({
            productId: updatedProductModel.id,
            updatedProductModel: {
              id: updatedProductModel.id,
              changes: updatedProductModel,
            },
          })
        )
      ),
    // { dispatch: false }
  );

  deleteProdudct$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(productActionTypes.deleteProduct),
        concatMap((action) =>
          this.productApiService.deleteProduct(action.productId)
        ),
        tap(() => this.router.navigateByUrl('/products-alt'))
      ),
    { dispatch: false }
  );
}
