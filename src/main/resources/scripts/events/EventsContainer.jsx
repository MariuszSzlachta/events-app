import React from "react";
import { isEmpty, isArray } from "lodash";
import { Loader } from "Common/components";
import { HTTP_METHODS } from "Common/Enums";
import { useApi } from "Common/hooks";
import { EVENTS_URL } from "Common/Urls";
import EventsList from "App/scripts/events/eventsList/EventsList";

const EventsContainer = () => {
    const [events, isLoading] = useApi(EVENTS_URL, {}, HTTP_METHODS.GET, []);
    if (isLoading) {
        return (
            <Loader />
        );
    }

    if (isArray(events) && !isEmpty(events)) {
        return (
            <EventsList events={events} />
        );
    }

    return (
        <span>brak eventów</span>
    );
};

export default EventsContainer;
