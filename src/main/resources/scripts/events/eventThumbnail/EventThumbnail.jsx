import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { PATH } from "Common/Urls";
import Cover from "App/scripts/events/event/cover/Cover";

import "./eventThumbnail.scss";

const EventThumbnail = ({ id, name }) => (
    <Link to={`${PATH.EVENTS}/${id}`} className="event-thumbnail">
        <Cover eventId={id} />
        <span className="event-thumbnail__name">{name}</span>
    </Link>
);

EventThumbnail.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
};

export default EventThumbnail;
