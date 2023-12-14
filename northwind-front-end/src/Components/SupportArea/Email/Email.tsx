// npm install --save @types/radium
// npm install --save radium --force
import Radium from "radium";

const randomNumber = Math.random();
const fixedBackColor = randomNumber < 0.5 ? "lightblue" : "lightgreen";
const hoverBackColor = randomNumber < 0.5 ? "darkblue" : "darkgreen";

function Email(): JSX.Element {

    const style = {
        backgroundColor: fixedBackColor,
        ":hover": {
            backgroundColor: hoverBackColor,
            color: "white"
        }
    };

    return (
        <div className="Box" style={style}>
			<p>Support Email: support@northwind.com</p>
        </div>
    );
}

export default Radium(Email);
