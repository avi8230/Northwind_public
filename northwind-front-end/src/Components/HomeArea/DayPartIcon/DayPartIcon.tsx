import "./DayPartIcon.css";
import coffeeImage from "../../../Assets/Images/coffee.png";
import waterImage from "../../../Assets/Images/water.png";
import wineImage from "../../../Assets/Images/wine.png";
import teaImage from "../../../Assets/Images/tea.png";
import { memo } from "react";

interface DayPartIconProps {
    hour: number;
}

function DayPartIcon(props: DayPartIconProps): JSX.Element {
    console.log("DayPartIcon Render...");
    return (
        <div className="DayPartIcon">
            <img src={getImageByHour(props.hour)} />
        </div>
    );
}

function getImageByHour(hour: number): string {
    if (hour >= 6 && hour <= 10) return coffeeImage;
    if (hour >= 11 && hour <= 15) return waterImage;
    if (hour >= 16 && hour <= 20) return wineImage;
    return teaImage;
}

export default memo(DayPartIcon); // memo = memoization (Latin memorandum - to be remembered)
// export default memo(DayPartIcon, (prevProps, newxProps)=>{...}); // memo = memoization (Latin memorandum - to be remembered)

// Higher Order Component (HOC)
