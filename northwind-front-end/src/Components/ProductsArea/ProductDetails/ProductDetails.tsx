import { Component } from "react";
// הדרך של פרקטיקיו לא עבדה, אז שמתי את הדרך שלהם בהערה, והשתמשתי במדריך הזה:
// https://www.cluemediator.com/how-to-access-url-parameters-in-the-class-component-using-react-router-v6

// דרך הרבה יותר קלה
// https://chat.openai.com/c/c0cf3a5f-8b7c-41e7-af7a-64bceae86c19

// import { RouteComponentProps } from "react-router";
import "./ProductDetails.css";
import withRouter from "../../SharedArea/withRouter/withRouter";
import ProductModel from "../../../Models/ProductModel";
// import config from "../../../Services/Config";
// import axios from "axios";
import { NavLink } from "react-router-dom";
import productsService from "../../../Services/ProductsService";

// interface RouteParams {
//     id: string;
// }

// interface ProductDetailsProps extends RouteComponentProps<RouteParams> { }
interface ProductDetailsProps  {
    params: any;
}

interface ProductDetailsState {
    product: ProductModel;
}

class ProductDetails extends Component<ProductDetailsProps, ProductDetailsState> {

    public constructor(props: ProductDetailsProps) {
        super(props);
        this.state = { 
            product: null 
        };
    }

    public async componentDidMount() {
        // const id = this.props.match.params.id;
        // console.log(this.props.params.id);
        // alert(this.props.params.id);
        try {
            this.setState({ product: await productsService.getOneProduct(+this.props.params.id) });
        }
        catch (err: any) {
            alert("Error: " + err.message);
        }
    }

    public render(): JSX.Element {
        return (
            <div className="ProductDetails Box">

                {this.state.product &&
                    <>
                        <h3>{this.state.product.name}</h3>
                        <h3>Price: ${this.state.product.price}</h3>
                        <h3>Stock: {this.state.product.stock}</h3>
                        <img src={this.state.product.imageUrl} />

                        <NavLink to="/products">Back</NavLink>
                        <span> | </span>
                        <NavLink to={"/products/edit/" + this.state.product?.id}>Edit</NavLink>
                        <span> | </span>
                        <NavLink to={"/products/delete/" + this.state.product?.id}>Delete</NavLink>
                    </>
                }

            </div>
        );
    }
}

export default withRouter(ProductDetails);
