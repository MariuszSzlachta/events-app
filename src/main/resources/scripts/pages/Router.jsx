import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { PATH } from "Common/Urls";
import { Dashboard } from "Pages";
import Event from "Event/Event";

export const Router = () => (
    <>
        <Switch>
            <Route path={PATH.DASHBOARD} component={Dashboard} />
            <Route path={`${PATH.EVENTS}/:id`} component={Event} />
            <Redirect to={PATH.DASHBOARD} />
        </Switch>
    </>
);
