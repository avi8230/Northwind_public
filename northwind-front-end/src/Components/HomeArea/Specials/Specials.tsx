function Specials(): JSX.Element {
    return (
        <div className="Box">

            <p>

                {isWeekend() ? <span> Pizza </span> : <span> Pasta </span>}

                <span> | </span>

                {isWeekend() && <span> Cholent </span>}
                {isWeekend() || <span> Fish & Chips </span>}

            </p>
            
        </div>
    );
}

function isWeekend(): boolean {
    const now = new Date();
    const dayOfWeek = now.getDay() + 1;
    return dayOfWeek >= 6;
}

export default Specials;
