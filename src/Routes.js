import React from "react";
import { BrowserRoute as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Community from "./pages/Community";

function Routes() {
    return (
        <Router>
            <Switch>
                <Route extact path="/" component={Home}></Route>
                <Route extact path="/comunidad" component={Community}></Route>
            </Switch>
        </Router>
    );
}

export default Routes;
