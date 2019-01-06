import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import RootComponent from './components';
import store from './store';

import "./styles/base.css";

render(
    <Provider store={store}>
        <RootComponent />
    </Provider>, 
    document.getElementById("root")
);
