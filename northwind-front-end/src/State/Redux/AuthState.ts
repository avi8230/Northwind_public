import jwtDecode from "jwt-decode";
import UserModel from "../../Models/UserModel";

export class AuthState {
    public token: string = null;
    public user: UserModel = null;

    public constructor() {
        this.token = sessionStorage.getItem("token");
        if(this.token) {
            const jwtPayload = jwtDecode(this.token);
            this.user = (jwtPayload as any).user;
        }
    }
}

export enum AuthActionType {
    Register = "Register",
    Login = "Login",
    Logout = "Logout"
}

export interface AuthAction {
    type: AuthActionType;
    payload?: string;
}

export function registerAction(token: string): AuthAction {
    return { type: AuthActionType.Register, payload: token };
}

export function loginAction(token: string): AuthAction {
    return { type: AuthActionType.Login, payload: token };
}

export function logoutAction(): AuthAction {
    return { type: AuthActionType.Logout };
}

export function authReducer(currentState = new AuthState(), action: AuthAction): AuthState {

    const newState = { ...currentState };

    switch (action.type) {

        case AuthActionType.Register:
        case AuthActionType.Login:
            newState.token = action.payload; // Here the payload is the token
            const jwtPayload = jwtDecode(newState.token);
            newState.user = (jwtPayload as any).user;
            sessionStorage.setItem("token", newState.token);

            // https://jwt.io/
            // console.log(newState.token);
            // console.log(newState.user);

            break;

        case AuthActionType.Logout:
            newState.token = null;
            newState.user = null;
            sessionStorage.removeItem("token");
            break;

    }

    return newState;
}