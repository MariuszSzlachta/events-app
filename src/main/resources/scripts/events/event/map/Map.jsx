import PropTypes from "prop-types";
import React from "react";
import GoogleMapReact from "google-map-react";
import { MapMarker } from "Common/components";

const Map = ({ cords, zoom = 5 }) => (
    <div className="event-map-container">
        <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyBxh2X1fRifIDq5BfrCIZwBGdXgnxDAexs" }}
            defaultCenter={cords}
            defaultZoom={zoom}
        >
            <MapMarker />
        </GoogleMapReact>
    </div>
);

Map.propTypes = {
    cords: PropTypes.shape({
        lat: PropTypes.string.isRequired,
        lng: PropTypes.string.isRequired
    }).isRequired,
    zoom: PropTypes.number
};

Map.defaultProps = {
    zoom: 5
};

export default Map;
