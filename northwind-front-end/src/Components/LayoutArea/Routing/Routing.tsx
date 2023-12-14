// npm i react-router-dom @types/react-router-dom
import { Navigate, Route, Routes } from "react-router";
// import ContactUs from "../../ContactUsArea/ContactUs/ContactUs";
import Home from "../../HomeArea/Home/Home";
import ProductList from "../../ProductsArea/ProductList/ProductList";
import ProductDetails from "../../ProductsArea/ProductDetails/ProductDetails";
import Support from "../../SupportArea/Support/Support";
import Page404 from "../Page404/Page404";

// לא הצלחתי לעבוד עם חבילה זו:
// npm i react-loadable @types/react-loadable
// לכן הסרתי אותה:
// npm uninstall react-loadable @types/react-loadable
// והשתמשתי במדריך זה:
// https://www.robinwieruch.de/react-router-lazy-loading/
import * as React from 'react';
import PleaseWait from "../../SharedArea/PleaseWait/PleaseWait";
import EmployeeList from "../../EmployeesArea/EmployeeList/EmployeeList";
import AddProduct from "../../ProductsArea/AddProduct/AddProduct";
import EditProduct from "../../ProductsArea/EditProduct/EditProduct";
import DeleteProduct from "../../ProductsArea/DeleteProduct/DeleteProduct";
import Register from "../../AuthArea/Register/Register";
import Login from "../../AuthArea/Login/Login";
import Logout from "../../AuthArea/Logout/Logout";
import GroceryList from "../../GroceryListArea/GroceryList/GroceryList";

const ContactUs = React.lazy(() => import('../../ContactUsArea/ContactUs/ContactUs'));

// https://stackoverflow.com/questions/63124161/attempted-import-error-switch-is-not-exported-from-react-router-dom
// https://stackoverflow.com/questions/69866581/property-exact-does-not-exist-on-type
function Routing(): JSX.Element {
    return (
        <Routes>

            <Route path="/home" element={<Home />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/products/details/:id" element={<ProductDetails />} />
            <Route path="/products/new" element={<AddProduct />} />
            <Route path="/products/edit/:id" element={<EditProduct />} />
            <Route path="/products/delete/:id" element={<DeleteProduct />} />
            <Route path="/employees" element={<EmployeeList />} />
            <Route path="/support" element={<Support />} />
            {/* <Route path="/contact-us" element={<ContactUs />} /> */}

            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />

            <Route
                path="/contact-us"
                element={
                    // <React.Suspense fallback={<>...</>}>
                    <React.Suspense fallback={<PleaseWait />}>
                        <ContactUs />
                    </React.Suspense>
                }
            />

            <Route path="/grocery-list" element={<GroceryList />} />

            {/* https://stackoverflow.com/questions/69868956/how-can-i-redirect-in-react-router-v6 */}
            <Route path="/" element={<Navigate to="/home" replace />} />

            <Route path="*" element={<Page404 />} />

        </Routes>
    );
}

export default Routing;
