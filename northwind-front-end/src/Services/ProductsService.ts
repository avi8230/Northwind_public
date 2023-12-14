import { Unsubscribe } from 'redux';
import axios from 'axios';
import ProductModel from "../Models/ProductModel";
import { addProductAction, deleteProductAction, ProductsState, setAllProductsAction, updateProductAction } from '../State/Redux/ProductsState';
import store from "../State/Redux/Store";
import config from './Config';

class ProductsService {

    public async getAllProducts(): Promise<ProductModel[]> {
        if (store.getState().productsState.products.length === 0) {
            const response = await axios.get<ProductModel[]>(config.urls.products + "delayed");
            const products = response.data;
            store.dispatch(setAllProductsAction(products));
        }
        return store.getState().productsState.products;
    }

    public async getOneProduct(id: number): Promise<ProductModel> {
        let product = store.getState().productsState.products.find(p => p.id === id);
        if (!product) {
            const response = await axios.get<ProductModel>(config.urls.products + id);
            product = response.data;
        }
        return product;
    }

    public async addProduct(product: ProductModel): Promise<void> {
        const formData = new FormData();
        formData.append("name", product.name);
        formData.append("price", product.price.toString());
        formData.append("stock", product.stock.toString());
        formData.append("image", product.image.item(0));
        const response = await axios.post<ProductModel>(config.urls.products, formData);
        const productToAdd = response.data;
        store.dispatch(addProductAction(productToAdd));
    }

    public async updateProduct(product: ProductModel): Promise<void> {
        const formData = new FormData();
        formData.append("name", product.name);
        formData.append("price", product.price.toString());
        formData.append("stock", product.stock.toString());
        formData.append("image", product.image.item(0));
        const response = await axios.put<ProductModel>(config.urls.products + product.id, formData);
        const updatedProduct = response.data;
        store.dispatch(updateProductAction(updatedProduct));
    }

    public async deleteProduct(id: number): Promise<void> {
        await axios.delete(config.urls.products + id);
        store.dispatch(deleteProductAction(id));
    }

    public subscribe(callback: (productsState: ProductsState) => void): Unsubscribe {
        return store.subscribe(() => callback(store.getState().productsState));
    }

}

const productsService = new ProductsService();

export default productsService;