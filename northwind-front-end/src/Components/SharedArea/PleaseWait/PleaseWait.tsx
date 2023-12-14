import "./PleaseWait.css";
// https://www.google.com/search?q=loading+gif+transparent&newwindow=1&hl=iw&sxsrf=ALiCzsbleOUHokSm9T3LRx-EJyZeMO1AGg:1666277303028&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjd2PnVhu_6AhWSNcAKHVxMDecQ_AUoAXoECAIQAw&biw=1279&bih=1082&dpr=1.5
// https://loading.io/
import loadingImage from "../../../Assets/Images/loading.gif";

function PleaseWait(): JSX.Element {
    return (
        <div className="PleaseWait">
			<img src={loadingImage} />
        </div>
    );
}

export default PleaseWait;
