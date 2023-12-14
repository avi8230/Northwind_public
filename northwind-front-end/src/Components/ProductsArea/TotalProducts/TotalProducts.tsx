// import { Component } from "react";
// import "./TotalProducts.css";
// import { Unsubscribe } from "redux";
// import productsService from "../../../Services/ProductsService";

// interface TotalProductsState {
//     count: number;
// }

// class TotalProducts extends Component<{}, TotalProductsState> {

//     private unsubscribeMe: Unsubscribe;

//     public componentDidMount(): void {
//         // this.unsubscribeMe = store.subscribe(() => {
//         //     this.setState({ count: store.getState().productsState.products.length });
//         // });
//         this.unsubscribeMe = productsService.subscribe(
//             productsState => this.setState({ count: productsState.products.length })
//         );
//     }

//     public render(): JSX.Element {
//         return (
//             <div className="TotalProducts">
//                 {this.state?.count > 0 && <span>Total Products: {this.state?.count}</span>}
//             </div>
//         );
//     }

//     public componentWillUnmount(): void {
//         this.unsubscribeMe();
//     }
// }

// export default TotalProducts;

// // ------------------------------------------------------------------------------------------------

// import { Component } from "react";
// import { connect } from "react-redux";
// import { ProductsAction } from "../../../Redux/ProductsState";
// import "./TotalProducts.css";

// interface TotalProductsProps {
//     count: number;
//     dispatch: (action: ProductsAction) => void;
// }

// class TotalProducts extends Component<TotalProductsProps> {
//     public render(): JSX.Element {
//         return (
//             <div className="TotalProducts">
//                 {this.props.count > 0 && <span>Total Products: {this.props.count}</span>}
//             </div>
//         );
//     }
// }

// function mapStateToProps(appState: any) {
//     return { count: appState.productsState.products.length };
// }

// function mapDispatchToProps(dispatch: (action: ProductsAction) => void) {
//     return { dispatch };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(TotalProducts);

// ------------------------------------------------------------------------------------------------

import { useSelector, useDispatch } from 'react-redux';
import "./TotalProducts.css";

function TotalProducts(): JSX.Element {

    const count = useSelector((appState: any) => appState.productsState.products.length);
    // https://builtin.com/software-engineering-perspectives/useselector-usedispatch-react-redux
    const dispatch = useDispatch();

    return (
        <div className="TotalProducts">
            {count > 0 && <span>Total Products: {count}</span>}
        </div>
    );
}

export default TotalProducts;
