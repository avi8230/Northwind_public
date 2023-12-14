import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { employeesReducer } from "./EmployeesState";
import { productsReducer } from "./ProductsState";
import { countActions } from "./Middleware";
// npm i redux-logger @types/redux-logger
import logger from "redux-logger";
import { authReducer } from "./AuthState";
import config from '../../Services/Config';

const reducers = combineReducers({
    productsState: productsReducer,
    employeesState: employeesReducer,
    authState: authReducer
});

const store = createStore(reducers, applyMiddleware(countActions, logger));
// npm i redux-devtools-extension
// const store = createStore(reducers, compose(applyMiddleware(countActions, logger), config.isDevelopment ? composeWithDevTools() : undefined));

// Single Reducer Syntax: 
// const store = createStore(productsReducer);
// store.getState().products

export default store;
