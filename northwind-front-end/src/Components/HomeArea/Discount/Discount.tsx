function Discount(): JSX.Element {

    const percent = 12;

    return (
        <div className="Box">
			<p>Only now, on {getDate()} - {percent}% discount on all products!</p>
        </div>
    );
}

function getDate(): string {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const now = new Date();
    const currentMonth = months[now.getMonth()];
    const currentYear = now.getFullYear();
    return currentMonth + " " + currentYear;
}

export default Discount;
