import BackgroundByHour from "../../SharedArea/BackgroundByHour/BackgroundByHour";
import "./Deliveries.css";

interface DeliveriesProps {
    startingHour: string;
    endingHour: string;
}

function Deliveries(props: DeliveriesProps): JSX.Element {
    return (
        <div className="Deliveries">
			<p>Delivery Hours: {props.startingHour} - {props.endingHour}</p>
        </div>
    );
}

// BackgroundByHour = HOC
export default BackgroundByHour(Deliveries);
