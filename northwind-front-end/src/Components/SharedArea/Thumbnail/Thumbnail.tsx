import "./Thumbnail.css";

interface ThumbnailProps {
    imageSource: string;
    imageTitle: string;
    imageClicked?: (imageTitle: string) => void;
}

function Thumbnail(props: ThumbnailProps): JSX.Element {

    function imageClickHandler() {
        // if (props.imageClicked) {
        //     props.imageClicked(props.imageTitle);
        // }
        props.imageClicked?.(props.imageTitle);
    }

    return (
        <div className="Thumbnail">
            <img
                src={props.imageSource}
                title={props.imageTitle}
                onClick={imageClickHandler}
            />
        </div>
    );
}

export default Thumbnail;
