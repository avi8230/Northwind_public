// import { SyntheticEvent } from "react";
// import "./Recommended.css";

// function Recommended(): JSX.Element {

//     const item = "Red Wine";

//     function clickHandler(args: SyntheticEvent): void {
//         // console.log(args.nativeEvent);
//         // console.dir(args.target);
//         // console.dir((args.target as HTMLButtonElement).innerHTML);
//         alert(item);
//     }

//     return (
//         <div className="Recommended Box">
//             {/* <button onClick={clickHandler}>Recommend a Product</button> */}
//             <button onClick={() => alert(item)}>Recommend a Product</button>
//             {/* <button onClick={(args) => { console.log(args); alert(item) }}>Recommend a Product</button> */}
//         </div>
//     );
// }

// export default Recommended;

import { Component } from "react";
import { SyntheticEvent } from "react";
import "./Recommended.css";

class Recommended extends Component {

    private item = "Red Wine";

    // private clickHandler(args: SyntheticEvent): void {
    //     console.log(args);
    //     alert(this.item);
    // }

    private clickHandler = (args: SyntheticEvent) => {
        console.log(args);
        alert(this.item);
    }

    public render(): JSX.Element {
        return (
            <div className="Recommended Box">
                {/* <button onClick={this.clickHandler.bind(this)}>Recommend a Product</button> */}
                {/* <button onClick={this.clickHandler}>Recommend a Product</button> */}
                <button className="NiceButton" onClick={() => alert(this.item)}>Recommend a Product</button> 
            </div>
        );
    }
}

export default Recommended;
