import { Component } from "react";
import { NavLink } from "react-router-dom";
import { Unsubscribe } from "redux";
import UserModel from "../../../Models/UserModel";
import authService from "../../../Services/AuthService";
import "./AuthMenu.css";

interface AuthMenuState {
    user: UserModel;
}

class AuthMenu extends Component<{}, AuthMenuState> {

    private unsubscribeMe: Unsubscribe;

    public componentDidMount(): void {
        this.setState({ user: authService.user });
        this.unsubscribeMe = authService.subscribe(authState => this.setState({ user: authState.user }));
    }

    public render(): JSX.Element {
        return (
            <div className="AuthMenu">
                {
                    this.state?.user &&
                    <>
                        <span>Hello {this.state.user.firstName + " " + this.state.user.lastName}</span>
                        <span> | </span>
                        <NavLink to="/logout">Logout</NavLink>
                    </>
                }
                {
                    !this.state?.user &&
                    <>
                        <span>Hello Guest</span>
                        <span> | </span>
                        <NavLink to="/login">Login</NavLink>
                        <span> | </span>
                        <NavLink to="/register">Register</NavLink>
                    </>
                }
            </div>
        );
    }

    public componentWillUnmount(): void {
        this.unsubscribeMe();
    }
}

export default AuthMenu;
