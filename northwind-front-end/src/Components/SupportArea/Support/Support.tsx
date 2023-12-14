import useTitle from "../../../Services/useTitle";
import Address from "../Address/Address";
import CallUs from "../CallUs/CallUs";
import Deliveries from "../Deliveries/Deliveries";
import Email from "../Email/Email";
import Facebook from "../Facebook/Facebook";
import Hours from "../Hours/Hours";
import LinkedIn from "../LinkedIn/LinkedIn";
import "./Support.css";

function Support(): JSX.Element {

    useTitle("Northwind | Support");

    return (
        <div className="Support">

            <Address />

            <Email />

            <Hours />

            <CallUs />

            <Deliveries startingHour="10:00 AM" endingHour="21:00 PM" />

            <Facebook />

            <LinkedIn />
        </div>
    );
}

export default Support;
