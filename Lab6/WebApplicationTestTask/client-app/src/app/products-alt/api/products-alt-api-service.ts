import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProductModel } from '../models/product-model';

@Injectable()
export class ProductsAltApiService {
    constructor(private httpClient: HttpClient) {}

    getProduct(id: number): Observable<ProductModel>{
        return this.httpClient.get<ProductModel>(`${environment.baseUrl}/api/alt/products/${id}`);
    }

    getAllProducts(): Observable<ProductModel[]> {
        return this.httpClient.get<ProductModel[]>(`${environment.baseUrl}/api/alt/products`);
    }

    createProduct(product: ProductModel): Observable<ProductModel> {
        return this.httpClient.post<ProductModel>(`${environment.baseUrl}/api/alt/products`, product);
    }

    updateProduct(product: ProductModel): Observable<ProductModel> {
        return this.httpClient.put<ProductModel>(`${environment.baseUrl}/api/alt/products/${product.id}`, product);
    }

    deleteProduct(id: number): Observable<ProductModel> {
        return this.httpClient.delete<ProductModel>(`${environment.baseUrl}/api/alt/products/${id}`);
    }
}