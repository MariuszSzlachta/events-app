import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { PATH } from "Common/Urls";
import { Router } from "Pages";

import "./styles/index.scss";

const App = () => (
    <BrowserRouter>
        <Route path={PATH.HOME}>
            <div>Hello world!</div>
            <Router />
        </Route>
    </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("app"));
