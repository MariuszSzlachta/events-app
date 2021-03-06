import PropTypes from "prop-types";
import React from "react";
import { useMediaQuery } from "react-responsive";
import { BREAKPOINTS } from "Common/Enums";
import { Arrow } from "Common/components";

import "./header.scss";

const Header = ({ headingText, eventId }) => {
    const isDisplayedOnPhone = useMediaQuery({ query: `(max-width: ${BREAKPOINTS.PHONE.MAX}px)` });

    const background = isDisplayedOnPhone ?
        `/assets/images/event/${eventId}/event_bg-small.jpg` :
        `/assets/images/event/${eventId}/event_bg-full.jpeg`;

    return (
        <header className="event-header" style={{ backgroundImage: `url(${background})` }}>
            <Arrow className="event-header__arrow" handleClick={() => window.history.back()} />
            <h2 className="event-header__heading">{headingText}</h2>
        </header>
    );
};

Header.propTypes = {
    headingText: PropTypes.string.isRequired,
    eventId: PropTypes.number.isRequired
};

export default Header;
