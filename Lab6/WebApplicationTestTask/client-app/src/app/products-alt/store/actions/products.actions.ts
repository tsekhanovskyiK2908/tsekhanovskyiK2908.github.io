import { Update } from "@ngrx/entity"
import { createAction, props } from "@ngrx/store"
import { ProductModel } from "../../models/product-model"

export enum ProductActions {
    CREATE_PRODUCT = '[Product] Create Product',
    GET_PRODUCT = '[Product] Get Product',
    GET_PRODUCT_SUCCESS = '[Product] Get Product Successfully',
    GET_PRODUCTS = '[Product] Get Products',
    GET_PRODUCTS_SUCCESS = '[Product] Get Products Successfully',
    UPDATE_PRODUCT = '[Product] Update Product',
    UPDATE_PRODUCT_SUCCESS = '[Product] Update Product Successfully',
    DELETE_PRODUCT = '[Product] Delete Product'
}

export const createProduct = createAction(
    ProductActions.CREATE_PRODUCT,
    props<{productModel: ProductModel}>()
)

export const getProduct = createAction(
    ProductActions.GET_PRODUCT,
    props<{productId: number}>()
)

export const getProductSuccess = createAction(
    ProductActions.GET_PRODUCT_SUCCESS,
    props<{product: ProductModel}>()
)

export const getProducts = createAction(
    ProductActions.GET_PRODUCTS,
)

export const getProductsSuccess = createAction(
    ProductActions.GET_PRODUCTS_SUCCESS,
    props<{productModels: ProductModel[]}>()
)

export const updateProduct  = createAction(
    ProductActions.UPDATE_PRODUCT,
    props<{productToUpdate: ProductModel}>()
)

export const updateProductSuccess = createAction(
    ProductActions.UPDATE_PRODUCT_SUCCESS,
    props<{productId: number, updatedProductModel: Update<ProductModel>}>()
    // props<{productId: number, updatedProductModel: Partial<ProductModel>}>()
)

export const deleteProduct = createAction(
    ProductActions.DELETE_PRODUCT,
    props<{productId: number}>()
)

export const productActionTypes = {
    createProduct,
    getProduct,
    getProductSuccess,
    getProducts,
    getProductsSuccess,
    updateProduct,
    updateProductSuccess,
    deleteProduct
}