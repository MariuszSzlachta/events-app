import PropTypes from "prop-types";
import React, { useState } from "react";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./mapMarker.scss";

export const MapMarker = ({ text }) => {
    const [isContentVisible, setIsContentVisible] = useState(false);
    const toggleContentVisibility = () => setIsContentVisible(isVisible => !isVisible);

    return (
        <button
            type="button"
            className="map-marker"
            onTouchStart={toggleContentVisibility}
            onClick={toggleContentVisibility}
        >
            <FontAwesomeIcon icon={faMapMarkerAlt} className="map-marker__icon" />

            {isContentVisible && (
                <div className="map-marker__text">{text}</div>
            )}
        </button>
    );
};

MapMarker.propTypes = {
    text: PropTypes.string.isRequired
};
