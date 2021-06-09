import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Community from "./pages/Community";
import TourPage from "./pages/TourPage";

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
                <Route path="/tour">
                    <TourPage />
                </Route>
            </Switch>
        </Router>
    );
}

export default Routes;
