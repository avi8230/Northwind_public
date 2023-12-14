import { Delete } from "@material-ui/icons";
import { observer } from "mobx-react";
import { NavLink } from "react-router-dom";
import { GroceryList } from "../../../State/MobX/GroceryListState";
import "./ViewGroceryList.css";

interface ViewGroceryListProps {
    groceryList: GroceryList;
}

function ViewGroceryList(props: ViewGroceryListProps): JSX.Element {

    function deleteHandler(index: number): void {
        props.groceryList.removeItem(index);
    }

    function clearHandler(): void {
        props.groceryList.clearList();
    }

    return (
        <div className="ViewGroceryList Box">

            <h2>Grocery List</h2>

            <table>
                <thead>
                    <tr>
                        <th>Items ({props.groceryList.totalItems})</th>
                        <th>Amount ({props.groceryList.totalAmount})</th>
                        <th>
                            <NavLink to="#" onClick={clearHandler}>
                                <Delete />
                            </NavLink>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {props.groceryList.items.map((item, index) =>
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.amount}</td>
                            <td>
                                <NavLink to="#" onClick={() => deleteHandler(index)}>
                                    <Delete />
                                </NavLink>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>

        </div>
    );
}

export default observer(ViewGroceryList);
