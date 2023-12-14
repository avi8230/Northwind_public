import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import authService from "../../../Services/AuthService";

function Logout(): JSX.Element {

    const navigate = useNavigate();

    useEffect(() => {

        authService.logout();

        alert("You have been successfully logged-out");

        navigate("/home");

    }, []);

    return null;
}

export default Logout;
