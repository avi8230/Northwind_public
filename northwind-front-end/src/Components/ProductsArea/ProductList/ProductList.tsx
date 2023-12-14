import { Component } from "react";
import "./ProductList.css";
import ProductModel from "../../../Models/ProductModel";
// npm i axios
import ProductCard from "../ProductCard/ProductCard";
import { NavLink } from "react-router-dom";
import { AddBox } from "@material-ui/icons";
import PleaseWait from "../../SharedArea/PleaseWait/PleaseWait";
import productsService from "../../../Services/ProductsService";

interface ProductListState {
    products: ProductModel[];
}

class ProductList extends Component<{}, ProductListState> {

    // public constructor(props: {}) {
    //     super(props);
    //     this.state = {
    //         products: []
    //     };
    // }

    // דרך 1
    // public componentDidMount(): void {
    //     axios.get<ProductModel[]>(config.urls.products)
    //         .then(response => this.setState({ products: response.data }))
    //         .catch(function (error) {
    //             if (error.response) {
    //                 // The request was made and the server responded with a status code
    //                 // that falls out of the range of 2xx
    //                 console.log(error.response.data);
    //                 console.log(error.response.status);
    //                 console.log(error.response.headers);
    //             } else if (error.request) {
    //                 // The request was made but no response was received
    //                 // `error.request` is an instance of XMLHttpRequest in the browser 
    //                 // and an instance of http.ClientRequest in node.js
    //                 console.log(error.request);
    //             } else {
    //                 // Something happened in setting up the request that triggered an Error
    //                 console.log('Error', error.message);
    //             }
    //             alert("Error: " + error.message);
    //         });
    // }
    // דרך 2
    public async componentDidMount() {
        try {
            this.setState({ products: await productsService.getAllProducts() });
        }
        catch (error: any) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log("error.response :" + error.response.data);
                console.log("error.response :" + error.response.status);
                console.log("error.response :" + error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser 
                // and an instance of http.ClientRequest in node.js
                console.log("error.request :" + error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log("Any error :", error.message);
            }
            alert("Error: " + error.message);
        }
    }

    public render(): JSX.Element {
        return (
            <div className="ProductList">

                {this.state?.products === undefined && <PleaseWait />}

                <NavLink to="/products/new"><AddBox /></NavLink>

                {this.state?.products.map(p => <ProductCard key={p.id} product={p} />)}

                {/* <table>
                    <thead>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Stock</th>
                    </thead>
                    <tbody>
                        {this.state.products.map(p => <tr key={p.id}>
                            <td>{p.name}</td>
                            <td>{p.price}</td>
                            <td>{p.stock}</td>
                        </tr>
                        )}
                    </tbody>
                </table> */}

            </div>
        );
    }
}

export default ProductList;
