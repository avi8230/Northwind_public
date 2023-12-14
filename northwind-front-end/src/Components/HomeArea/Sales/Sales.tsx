// interface SalesProms {
//     category?: string;
//     percent: number;
// }

// function Sales(props: SalesProms): JSX.Element {
//     return (
//         <div className="Box">

//             {/* <p>Sale: {props.percent}% off on all {props.category}!</p> */}

//             {/* {
//                 props.category ?
//                     <p>Sale: {props.percent}% off on all {props.category}!</p> :
//                     <p>Sale: {props.percent}% off on all products!</p>
//             } */}

//             <p>Sale: {props.percent}% off on all {props.category}!</p>

//         </div>
//     );
// }

// Sales.defaultProps = { category: "candies" };

// export default Sales;

import { Component } from "react";

interface SalesProps {
    category?: string;
    percent: number;
}

class Sales extends Component<SalesProps> {

    public constructor(props: SalesProps) {
        super(props);
    }

    public static get defaultProps(): SalesProps {
        return {
            category: "candies",
            percent: 10
        };
    }

    public render(): JSX.Element {
        return (
            <div className="Box">
                <p>Sale: {this.props.percent}% off on all {this.props.category}!</p>
            </div>
        );
    }
}

export default Sales;