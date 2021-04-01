import { DataResponseModel } from "src/app/shared/models/dataResponseModel";
import { ProductCategory } from "../enums/product-category";

export class ProductModel {
    id: number;
    name: string;
    productCategory: ProductCategory;
    avaliableQuantity: number;
    price: number;
    createdDate: number;
    description: string;

    constructor(response: DataResponseModel<ProductModel>) {
        this.id = response.data.id;
    }
}