import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductState, selectAll } from "../reducers/products.reducers";

export const productFeatureSelector = createFeatureSelector<ProductState>('products');

export const getAllProducts = createSelector(
    productFeatureSelector,
    selectAll
);

export const getProductSelector = createSelector(
    productFeatureSelector,
    state => state.singleProduct
)

export const areCoursesLoaded = createSelector(
    productFeatureSelector,
    state => state.productsLoaded
);