import { Unsubscribe } from 'redux';
import axios from 'axios';
import CredentialsModel from '../Models/CredentialsModel';
import UserModel from "../Models/UserModel";
import { AuthState, loginAction, logoutAction, registerAction } from '../State/Redux/AuthState';
import store from '../State/Redux/Store';
import config from './Config';

class AuthService {

    public async register(user: UserModel): Promise<void> {
        const response = await axios.post<string>(config.urls.register, user);
        const token = response.data;
        store.dispatch(registerAction(token));
    }

    public async login(credentials: CredentialsModel): Promise<void> {
        const response = await axios.post<string>(config.urls.login, credentials);
        const token = response.data;
        store.dispatch(loginAction(token));
    }

    public logout(): void {
        store.dispatch(logoutAction());
    }

    public subscribe(callback: (authState: AuthState) => void): Unsubscribe {
        return store.subscribe(() => callback(store.getState().authState));
    }

    public get token(): string {
        return store.getState().authState.token;
    }

    public get user(): UserModel {
        return store.getState().authState.user;
    }

    public isLoggedIn(): boolean {
        return this.token !== null;
    }
}

const authService = new AuthService();

export default authService;
