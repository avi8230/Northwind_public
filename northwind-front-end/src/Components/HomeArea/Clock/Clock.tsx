// import { Component, ErrorInfo } from "react";
// import DayPartIcon from "../DayPartIcon/DayPartIcon";

// interface ClockProps {
//     AMPM?: boolean;
// }

// interface ClockState {
//     time: string;
// }

// class Clock extends Component<ClockProps, ClockState> {

//     private timerId = 0;

//     // 1. Object has been created. Usage: init state and class fields.
//     // Don't do side-effects.
//     public constructor(props: ClockProps) {
//         super(props);
//         this.state = { time: this.getTime() };
//     }

//     // 2. UI needs to be rendered into the DOM. Usage: return component UI.
//     public render(): JSX.Element {
//         return (
//             <div className="Box">
//                 {this.state.time}

//                 <DayPartIcon hour={new Date().getHours()} />
//             </div>
//         );
//     }

//     // 3. props have been changed. Usage: integrate props into the state by returning current props:
//     public static getDerivedStateFromProps(props: ClockProps, state: ClockState): ClockProps {
//         return props;
//     }

//     // 4. Component rendered once and ready for use. Usage: any side-effects needed only once:
//     public componentDidMount(): void {
//         this.timerId = window.setInterval(() => this.setState({ time: this.getTime() }), 1000);
//     }

//     // 5. Component state or props have been changed. Usage: some logic accordingly
//     public componentDidUpdate(prevProps: ClockProps, prevState: ClockState): void {
//         //console.log(prevProps, this.props);
//         //console.log(prevState, this.state);
//     }

//     // 6. A child component crashed. Usage: crash logs, message...
//     public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
//         //console.log(error, errorInfo);
//     }

//     // 7. The component is about to be destroyed. Usage: cleanups, close things, unsubscribe...
//     public componentWillUnmount(): void {
//         window.clearInterval(this.timerId);
//     }

//     private getTime = () => {
//         const now = new Date();
//         if (this.props.AMPM) {
//             return now.toLocaleTimeString(); // 10:20:30 PM
//         }
//         else {
//             return now.toTimeString().substr(0, 8); // 22:20:30
//         }
//     }
// }

// export default Clock;


// --------------------------------------------------------------------------------------------

import { useEffect, useState } from "react";
import DayPartIcon from "../DayPartIcon/DayPartIcon";

interface ClockProps {
    AMPM?: boolean;
}

function Clock(props: ClockProps): JSX.Element {

    const [time, setTime] = useState<string>(getTime());

    // componentDidUpdate:
    // useEffect(() => {
    //     window.setInterval(() => setTime(getTime()), 1000);
    // });

    // componentDidMount:
    useEffect(() => {
        const timerId = window.setInterval(() => setTime(getTime()), 1000);

        // componentWillUnmount:
        return () => window.clearInterval(timerId);
        
    }, []);

    function getTime() {
        const now = new Date();
        return props.AMPM ? now.toLocaleTimeString() : now.toTimeString().substr(0, 8);
    }

    return (
        <div className="Box">
            {time}
            <DayPartIcon hour={new Date().getHours()} />
        </div>
    );
}

export default Clock;