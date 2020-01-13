import React from "react";
import _ from "lodash";
import { HTTP_METHODS } from "Common/Enums";
import { useApi } from "Common/hooks";
import { EVENTS_URL } from "Common/Urls";
import EventsList from "App/scripts/events/eventsList/EventsList";

const EventsContainer = () => {
    const [events, isLoading, hasErrorOccurred] = useApi(EVENTS_URL, {}, HTTP_METHODS.GET, []);

    if (isLoading) {
        return <span>loading...</span>;
    }

    if (!_.isNil(events)) {
        return (
            <EventsList events={events} />
        );
    }

    return (
        hasErrorOccurred && <span>zaślepka error</span>
    );
};

export default EventsContainer;
