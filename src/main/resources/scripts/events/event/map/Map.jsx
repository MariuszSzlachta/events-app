import PropTypes from "prop-types";
import React from "react";
import GoogleMapReact from "google-map-react";
import { MapMarker } from "Common/components";

import "./map.scss";

const Map = ({ cords, zoom = 5, textValue }) => (
    <div className="event-map-container">
        <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyBxh2X1fRifIDq5BfrCIZwBGdXgnxDAexs" }}
            defaultCenter={cords}
            defaultZoom={zoom}
            className="event-map"
        >
            <MapMarker
                lat={cords.lat}
                lng={cords.lng}
                text={textValue}
            />
        </GoogleMapReact>
    </div>
);

Map.propTypes = {
    cords: PropTypes.shape({
        lat: PropTypes.number.isRequired,
        lng: PropTypes.number.isRequired
    }).isRequired,
    zoom: PropTypes.number,
    textValue: PropTypes.string.isRequired
};

Map.defaultProps = {
    zoom: 5
};

export default Map;
