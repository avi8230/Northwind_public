// import { Component } from "react";
// import "./Bestseller.css";

// interface BestsellerState {
//     item: string;
//     price: number;
// }

// class Bestseller extends Component<{}, BestsellerState> {

//     public constructor(props: {}) {
//         super(props);
//         this.state = { item: "", price: 0 };
//     }

//     private itemHandler = () => {
//         this.setState({ item: "Irish Coffee" });
//     }

//     private priceHandler = () => {
//         this.setState({ price: 3.9 });
//     }

//     public render(): JSX.Element {
//         return (
//             <div className="Bestseller Box">
//                 <button className="NiceButton" onClick={this.itemHandler}>Bestseller Item</button>
//                 <button className="NiceButton" onClick={this.priceHandler}>Bestseller Price</button>
//                 <span>{this.state.item}</span>
//                 <span> | </span>
//                 <span>${this.state.price}</span>
//             </div>
//         );
//     }
// }

// export default Bestseller;

// --------------------------------------------------------------------------------------

import { useState } from "react";
import "./Bestseller.css";

function Bestseller(): JSX.Element {

    const [item, setItem] = useState<string>("");
    const [price, setPrice] = useState<number>(0);

    function itemHandler() {
        setItem("Irish Coffee");
    }

    function priceHandler() {
        setPrice(4.5);
    }

    return (
        <div className="Bestseller Box">
            <button className="NiceButton" onClick={itemHandler}>Bestseller Item</button>
            <button className="NiceButton" onClick={priceHandler}>Bestseller Price</button>
            <span>{item}</span>
            <span> | </span>
            <span>${price}</span>
        </div>
    );
}

export default Bestseller;