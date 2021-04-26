import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.scss';
import store from "./lib/store";
import {Provider} from "react-redux";
import MainContainer from "./Components";
import {BrowserRouter} from "react-router-dom";
import {routes} from "./lib/routes";

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <MainContainer routes={routes}/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
)
