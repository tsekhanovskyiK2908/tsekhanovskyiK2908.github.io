import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { ProductModel } from "../../models/product-model";
import { productActionTypes } from "../actions/products.actions";

export interface ProductState extends EntityState<ProductModel> {
    productsLoaded: boolean;
    avaliableProducts: ProductModel[];
    singleProduct: ProductModel;
}

export const adapter: EntityAdapter<ProductModel> = createEntityAdapter<ProductModel>();

export const initialState = adapter.getInitialState({
    productsLoaded: false,
    avaliableProducts: [],
    singleProduct: {}    
});

export const productReducer = createReducer(
    initialState,

    on(productActionTypes.getProductsSuccess, (state, action) => {
        return adapter.setAll(
            action.productModels,
            {...state, productsLoaded: true, avaliableProducts: action.productModels}
        );
    }),

    on(productActionTypes.getProductSuccess, (state, action) => {
        return adapter.setOne(
            action.product,
            {...state, singleProduct: action.product}
        );
    }),

    on(productActionTypes.createProduct,(state, action) => {
        return adapter.addOne(action.productModel, state);
    }),

    on(productActionTypes.updateProductSuccess, (state, action) => {
        return adapter.updateOne(action.updatedProductModel, state);
    }),

    on(productActionTypes.deleteProduct, (state, action) => {
        return adapter.removeOne(action.productId, state);
    })
);

export const { selectAll, selectIds } = adapter.getSelectors();