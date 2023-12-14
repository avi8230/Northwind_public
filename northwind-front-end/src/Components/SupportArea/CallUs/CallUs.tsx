import StyledButton from "../../StyledArea/StyledButton/StyledButton";

function CallUs(): JSX.Element {

    function call(): void {
        alert("Calling...");
    }

    return (
        <div className="Box">
            <button>Test</button>
            <button disabled>Test</button>
			<StyledButton onClick={call}>Call Help Desk</StyledButton>
			<StyledButton onClick={call} disabled>Call Tech Support</StyledButton>
        </div>
    );
}

export default CallUs;
