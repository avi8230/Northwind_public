// import colors from "../../../Services/Colors";
// import "./BackgroundByHour.css";

// function BackgroundByHour(InnerComponent: Function): Function {
//     return function (props: any) {
//         const style = {
//             backgroundColor: colors.getColorByHour()
//         };
//         return (
//             <div className="BackgroundByHour Box" style={style}>
//                 <InnerComponent {...props} />
//             </div>
//         );
//     }
// }

// export default BackgroundByHour;

// -------------------------------------------------------------------------


import { Component } from "react";
import colors from "../../../Services/Colors";
import "./BackgroundByHour.css";

function BackgroundByHour(InnerComponent: Function): Function {
    return class extends Component<any> {
        private style = {
            backgroundColor: colors.getColorByHour()
        };
        public render(): JSX.Element {
            return (
                <div className="BackgroundByHour Box" style={this.style}>
                    <InnerComponent {...this.props} />
                </div>
            );
        }
    }

}

export default BackgroundByHour;
