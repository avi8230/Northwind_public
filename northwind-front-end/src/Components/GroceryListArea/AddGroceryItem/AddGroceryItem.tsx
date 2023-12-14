import { observer } from "mobx-react-lite";
import { useForm } from "react-hook-form";
import GroceryItemModel from "../../../Models/GroceryItemModel";
import { GroceryList } from "../../../State/MobX/GroceryListState";
import "./AddGroceryItem.css";

interface AddGroceryItemProps {
    groceryList: GroceryList;
}

function AddGroceryItem(props: AddGroceryItemProps): JSX.Element {

    const { register, handleSubmit, setValue } = useForm<GroceryItemModel>();

    function submit(item: GroceryItemModel): void {
        props.groceryList.addItem(item);
        setValue("name", "");
        setValue("amount", 1);
    }

    return (
        <div className="AddGroceryItem Box">

            <h2>Add Item</h2>

            <form onSubmit={handleSubmit(submit)}>

                <label>Item: </label>
                <input type="text" autoFocus {...register("name")} />

                <label>Amount: </label>
                <input type="number" min="1" max="100" {...register("amount")} defaultValue="1" />

                <button>Add</button>

            </form>


        </div>
    );
}

export default observer(AddGroceryItem);
