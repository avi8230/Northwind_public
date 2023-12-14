import groceryList from "../../../State/MobX/GroceryListState";
import AddGroceryItem from "../AddGroceryItem/AddGroceryItem";
import ViewGroceryList from "../ViewGroceryList/ViewGroceryList";
import "./GroceryList.css";

function GroceryList(): JSX.Element {
    return (
        <div className="GroceryList">
			
            <AddGroceryItem groceryList={groceryList} />

            <ViewGroceryList groceryList={groceryList} />

        </div>
    );
}

export default GroceryList;
