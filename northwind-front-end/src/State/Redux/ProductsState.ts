import ProductModel from "../../Models/ProductModel";

// AppState
export class ProductsState {
    public products: ProductModel[] = [];
}

// Action Types
export enum ProductsActionType {
    AddProduct = "AddProduct",
    UpdateProduct = "UpdateProduct",
    DeleteProduct = "DeleteProduct",
    SetAllProducts = "SetAllProducts"
}

// Action
export interface ProductsAction {
    type: ProductsActionType;
    payload: any;
}

// Action Creators
export function addProductAction(productToAdd: ProductModel): ProductsAction {
    return { type: ProductsActionType.AddProduct, payload: productToAdd };
}
export function updateProductAction(productToUpdate: ProductModel): ProductsAction {
    return { type: ProductsActionType.UpdateProduct, payload: productToUpdate };
}
export function deleteProductAction(productIdToDelete: number): ProductsAction {
    return { type: ProductsActionType.DeleteProduct, payload: productIdToDelete };
}
export function setAllProductsAction(allProducts: ProductModel[]): ProductsAction {
    return { type: ProductsActionType.SetAllProducts, payload: allProducts };
}

// Reducer
export function productsReducer(currentState = new ProductsState(), action: ProductsAction): ProductsState {

    const newState = { ...currentState };

    switch (action.type) {

        case ProductsActionType.AddProduct: // here the payload is the product to add.
            newState.products.push(action.payload);
            break;

        case ProductsActionType.UpdateProduct: // here the payload is the product to update.
            const indexToUpdate = newState.products.findIndex(p => p.id === action.payload.id);
            newState.products[indexToUpdate] = action.payload;
            break;

        case ProductsActionType.DeleteProduct: // here the payload is the product id to delete.
            const indexToDelete = newState.products.findIndex(p => p.id === action.payload);
            newState.products.splice(indexToDelete, 1);
            break;

        case ProductsActionType.SetAllProducts: // here the payload is products array.
            newState.products = action.payload;
            // console.log(newState.products);
            break;
    }

    return newState;
}