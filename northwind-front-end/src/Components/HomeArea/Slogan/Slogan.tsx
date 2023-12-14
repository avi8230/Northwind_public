import { Children, ReactNode } from "react";
import "./Slogan.css";

interface SloganProps {
	children: ReactNode
}

function Slogan(props: SloganProps): JSX.Element {
    return (
        <div className="Slogan Box">
			<p>
                {/* Single Children Element: */}
                {/* {props.children} 💙  */}

                {/* Multiple Children Elements */}
                {Children.map(props.children, c => <> {c} 💙 </>)}
            </p>
        </div>
    );
}

export default Slogan;
