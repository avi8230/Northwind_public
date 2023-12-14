import { Component, SyntheticEvent } from "react";
import "./Wishlist.css";

interface WishlistState {
    items: string[];
    newItem: string;
}

class Wishlist extends Component<{}, WishlistState> {

    public constructor(props: {}) {
        super(props);
        this.state = { items: [], newItem: "" };
    }

    private textChangedHandler = (args: SyntheticEvent) => {
        const newItem = (args.target as HTMLInputElement).value;
        this.setState({ newItem });
        // console.log((args.target as HTMLInputElement).value);
    }

    private addItemHandler = () => {
        const items = [...this.state.items, this.state.newItem];
        this.setState({ items, newItem: "" });
    }

    private keyPressHandler = (args: SyntheticEvent) => {
        const key = (args.nativeEvent as KeyboardEvent).key;
        if(key === "Enter") {
            this.addItemHandler();
        }
    }

    public render(): JSX.Element {
        return (
            <div className="Wishlist Box">
                <input type="text" placeholder="My Wishlist..."
                    onChange={this.textChangedHandler}
                    value={this.state.newItem}
                    onKeyDown={this.keyPressHandler} />
                <button onClick={this.addItemHandler}> + </button>
                <p>
                    {this.state.items.map(item => <span key={item}>{item} | </span>)}
                </p>
            </div>
        );
    }
}

export default Wishlist;
