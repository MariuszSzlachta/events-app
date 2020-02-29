import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { PATH } from "Common/Urls";
import { Dashboard } from "Pages";
import EventsContainer from "App/scripts/events/EventsContainer";
import Event from "Event/Event";

export const Router = () => (
    <>
        <Switch>
            <Route path={PATH.DASHBOARD} component={Dashboard} />
            <Route path={`${PATH.EVENTS}/:id`} render={({ match: { params: { id } } }) => <Event id={id} />} />
            <Route path={PATH.EVENTS} component={EventsContainer} />
            <Redirect to={PATH.DASHBOARD} />
        </Switch>
    </>
);
