import { NavLink } from "react-router-dom";
import "./Menu.css";
import TotalProducts from "../../ProductsArea/TotalProducts/TotalProducts";

function Menu(): JSX.Element {
    return (
        <nav className="Menu">
            <NavLink end to="/home" >Home</NavLink>
            <NavLink end to="/products">Products</NavLink>
            <NavLink to="/employees">Employees</NavLink>
            <NavLink to="/grocery-list" >Grocery List</NavLink>
            <NavLink end to="/support">Support</NavLink>
            <NavLink end to="/contact-us">Contact Us</NavLink>

            <TotalProducts />
        </nav>
    );
}

export default Menu;
