import { Component } from "react";
import ThemeContext from "../../../State/Context/ThemeContext";
import "./LinkedIn.css";

class LinkedIn extends Component {

    static contextType = ThemeContext;

    public render(): JSX.Element {
        return (
            <div className="LinkedIn Box" style={this.context}>
				<p>LinkedIn: https://www.linkedin.com/northwind</p>
            </div>
        );
    }
}

export default LinkedIn;
