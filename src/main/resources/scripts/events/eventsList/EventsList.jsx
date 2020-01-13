import PropTypes from "prop-types";
import React from "react";
import _ from "lodash";

import EventThumbnail from "App/scripts/events/eventThumbnail/EventThumbnail";

import "./eventsList.scss";

const EventsList = ({ events }) => {
    if (!_.isNull(events)) {
        return (
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
    }

    return <span>brak danych</span>;
};

export default EventsList;

EventsList.propTypes = {
    events: PropTypes.instanceOf(Array)
};

EventsList.defaultProps = {
    events: null
};
