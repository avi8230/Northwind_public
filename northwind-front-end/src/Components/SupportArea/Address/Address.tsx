import colors from "../../../Services/Colors";
import "./Address.css";

function Address(): JSX.Element {

    const style = {
        backgroundColor: colors.getRandomColor(),
        color: colors.getRandomColor()
    };

    const paragraphClass = Math.random() < 0.5 ? "UpSlant" : "DownSlant";

    return (
        <div className="Box" style={style}>
			<p className={paragraphClass}>Our Address: Gold 12, Tel Aviv</p>
        </div>
    );
}

// function getRandomColor(): string {
//     const r = Math.floor(Math.random() * 256);
//     const g = Math.floor(Math.random() * 256);
//     const b = Math.floor(Math.random() * 256);
//     return `rgb(${r},${g},${b})`;
// }

export default Address;
