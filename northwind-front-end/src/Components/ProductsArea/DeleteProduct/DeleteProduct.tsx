import { Component } from "react";
import "./DeleteProduct.css";
import axios from "axios";
import config from "../../../Services/Config";
import ProductModel from "../../../Models/ProductModel";
import withRouter from "../../SharedArea/withRouter/withRouter";
import productsService from "../../../Services/ProductsService";

// interface RouteParams { id: string; }
interface DeleteProductProps { 
    params: any; 
    navigate: Function;
}
interface DeleteProductState { product: ProductModel; }

class DeleteProduct extends Component<DeleteProductProps, DeleteProductState> {

    public async componentDidMount() {
        try {
            const id = this.props.params.id;
            const response = await axios.get<ProductModel>(config.urls.products + id);
            this.setState({ product: response.data });
        }
        catch (err) {
            console.log(err);
        }
    }

    private deleteHandler = async () => {
        try {
            await productsService.deleteProduct(+this.props.params.id)
            alert("Product has been successfully deleted.");
            // https://reactnavigation.org/docs/use-navigation/
            this.props.navigate("/products");
        }
        catch (err) {
            alert(err)
        }
    }

    public render(): JSX.Element {
        return (
            <div className="DeleteProduct Box">
                {this.state?.product &&
                    <>
                        <h2>Delete this Product?</h2>
                        <h3>Name: {this.state.product.name}</h3>
                        <h3>Price: ${this.state.product.price} | Stock: {this.state.product.stock}</h3>

                        <img src={this.state.product.imageUrl} />

                        <button onClick={this.deleteHandler}>Delete</button>
                        <button type="button" onClick={() => this.props.navigate("/products")}>Cancel</button>
                    </>
                }
            </div>
        );
    }
}

export default withRouter(DeleteProduct);