import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Layout from './Components/LayoutArea/Layout/Layout';
// npm install --save redux react-redux
import { Provider } from 'react-redux';
import store from './State/Redux/Store';
import createInterceptors from './Services/Interceptors';
import ThemeContext, { appTheme } from './State/Context/ThemeContext';

createInterceptors();

ReactDOM.render(
    <React.StrictMode>
        <ThemeContext.Provider value={appTheme}>
            <Provider store={store}>
                <Layout />
            </Provider>
        </ThemeContext.Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
