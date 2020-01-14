import PropTypes from "prop-types";
import React from "react";

import EventThumbnail from "App/scripts/events/eventThumbnail/EventThumbnail";

import "./eventsList.scss";

const EventsList = ({ events }) => (
    <ul className="events-list">
        {events.map(({ name, id }) => (
            <li className="events-list__item" key={id}>
                <EventThumbnail
                    id={id}
                    name={name}
                />
            </li>
        ))}
    </ul>
);

export default EventsList;

EventsList.propTypes = {
    events: PropTypes.instanceOf(Array)
};

EventsList.defaultProps = {
    events: null
};
