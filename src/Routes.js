import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Community from "./pages/Community";

function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/comunidad">
                    <Community />
                </Route>
            </Switch>
        </Router>
    );
}

export default Routes;
