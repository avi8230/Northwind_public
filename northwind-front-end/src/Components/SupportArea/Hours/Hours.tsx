import css from "./Hours.module.css";

function Hours(): JSX.Element {
    return (
        <div className={css.Hours + " Box"}>
			<p className={css.Bright}>
                Opening Hours: 
                <span className={css.Underlined + " " + css.Larger}>7:00 AM - 9:00 PM</span>,
                Sunday to Thursday
            </p>
        </div>
    );
}

export default Hours;
