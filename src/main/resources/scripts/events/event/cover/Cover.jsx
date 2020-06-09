import PropTypes from "prop-types";
import React from "react";
import { useMediaQuery } from "react-responsive";
import { BREAKPOINTS } from "Common/Enums";

import "./cover.scss";

const Cover = ({ eventId }) => {
    const isDisplayedOnPhone = useMediaQuery({ query: `(max-width: ${BREAKPOINTS.PHONE.MAX}px)` });
    const source = isDisplayedOnPhone ?
        `/assets/images/event/${eventId}/event_bg-small.jpg` :
        `/assets/images/event/${eventId}/event_bg-full.jpeg`;

    return (
        <img className="event-cover" src={source} alt="cover of event" />
    );
};

Cover.propTypes = {
    eventId: PropTypes.number.isRequired
};

export default Cover;
