import { useContext } from "react";
import ThemeContext, { CssValues } from "../../../State/Context/ThemeContext";
import "./Facebook.css";

function Facebook(): JSX.Element {

    const appTheme = useContext<CssValues>(ThemeContext);

    return (
        <div className="Facebook Box" style={appTheme}>
			<p>Facebook: https://www.facebook.com/northwind</p>
        </div>
    );
}

export default Facebook;
