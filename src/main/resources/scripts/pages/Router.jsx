import React from "react";
import { Route, Switch } from "react-router-dom";
import { PATH } from "Common/Urls";
import { Dashboard } from "Pages";

export const Router = () => (
    <>
        <Switch>
            <Route path={PATH.DASHBOARD} component={Dashboard} />
        </Switch>
    </>
);
