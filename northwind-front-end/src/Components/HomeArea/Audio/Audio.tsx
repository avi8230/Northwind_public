// import { Component, createRef, RefObject } from "react";
// import "./Audio.css";
// import song from "../../../Assets/Audio/fade-into-you.mp3";

// class Audio extends Component {

//     private audioRef: RefObject<HTMLAudioElement> = createRef();

//     public render(): JSX.Element {
//         return (
//             <div className="Audio Box">
//                 <audio src={song} ref={this.audioRef} />
//                 <button onClick={() => this.audioRef.current?.play()}>Play</button>
//                 <button onClick={() => this.audioRef.current?.pause()}>Pause</button>
//                 <button onClick={() => this.audioRef.current?.load()}>Stop</button>
//             </div>
//         );
//     }
// }

// export default Audio;

// ----------------------------------------------------------------------

import { RefObject, useRef } from "react";
import "./Audio.css";
import song from "../../../Assets/Audio/fade-into-you.mp3";

function Audio(): JSX.Element {

    const audioRef: RefObject<HTMLAudioElement> = useRef();

    return (
        <div className="Audio Box">
            <audio src={song} ref={audioRef} />
            <button onClick={() => audioRef.current?.play()}>Play</button>
            <button onClick={() => audioRef.current?.pause()}>Pause</button>
            <button onClick={() => audioRef.current?.load()}>Stop</button>
        </div>
    );
}

export default Audio;
