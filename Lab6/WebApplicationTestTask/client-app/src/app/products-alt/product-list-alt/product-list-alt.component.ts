import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { OrderApiService } from 'src/app/orders/api/order-api-service';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';
import { InformationDialogComponent } from 'src/app/shared/information-dialog/information-dialog.component';
import { AppState } from 'src/app/store/reducers';
import { ProductsAltApiService } from '../api/products-alt-api-service';
import { ProductModel } from '../models/product-model';
import { getProducts, productActionTypes } from '../store/actions/products.actions';
import { getAllProducts } from '../store/selectors/products.selectors';

@Component({
  selector: 'app-product-list-alt',
  templateUrl: './product-list-alt.component.html',
  styleUrls: ['./product-list-alt.component.scss']
})
export class ProductListAltComponent implements OnInit {

  products$: Observable<ProductModel[]>;

  constructor(private productApiService: ProductsAltApiService,
    private store: Store<AppState>,
    private orderApiService: OrderApiService, 
    private confirmationDialog: MatDialog,
    private informationDialog: MatDialog) { }

  ngOnInit(): void {
    this.productApiService.getAllProducts().subscribe(products => {
      this.store.dispatch(productActionTypes.getProducts());
      this.products$ = this.store.select(getAllProducts);
    });   
  }

  deleteProduct(productModel: ProductModel) {
    let orders = [];
    
    this.orderApiService.getOrders().subscribe(response => {
      orders = response.data;
    });

    const dialogRef = this.confirmationDialog.open(ConfirmationDialogComponent, {
      data: {message: `Do you want to delete product: ${productModel.name}?`}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (orders.find(o => o.orderProducts
                        .find(op => op.productId === productModel.id)) === undefined) {          
          this.store.dispatch(productActionTypes.deleteProduct({productId: productModel.id}))          
        } else {
          this.informationDialog.open(InformationDialogComponent, {
            data: {message: `${productModel.name} can't be deleted. It used in some orders`}
          });          
        }
      }
    });
  }

}
