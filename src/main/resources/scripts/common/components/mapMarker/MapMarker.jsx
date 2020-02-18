import PropTypes from "prop-types";
import React from "react";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const MapMarker = ({ onClick }) => (
    <button type="button" className="map-marker" onClick={onClick}>
        <FontAwesomeIcon icon={faMapMarkerAlt} />
    </button>
);

MapMarker.propTypes = {
    onClick: PropTypes.instanceOf(Function)
};

MapMarker.defaultProps = {
    onClick: () => {}
};
