import PropTypes from "prop-types";
import React from "react";
import { compose, withProps } from "recompose";

import {
    GoogleMap, Marker, withGoogleMap, withScriptjs
} from "react-google-maps";
import { MapMarker } from "Common/components";
import styles from "./map.styles";

import "./map.scss";

const Map = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDRhXhgEGJzKLoq5YcN5wkUr9P-k6gbaSg&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: "100%" }} />,
        containerElement: <div style={{ height: "400px" }} />,
        mapElement: <div style={{ height: "100%" }} />
    }),
    withScriptjs,
    withGoogleMap
)(({ cords, zoom, isMarkerShown }) => (
    <div className="event-map-container">
        <GoogleMap
            bootstrapURLKeys={{ key: "AIzaSyDRhXhgEGJzKLoq5YcN5wkUr9P-k6gbaSg" }}
            defaultCenter={cords}
            defaultZoom={zoom}
            className="event-map"
            options={{
                styles
            }}
            // styles={style}
        >
            {/* <MapMarker */}
            {/*    lat={cords.lat} */}
            {/*    lng={cords.lng} */}
            {/*    text={textValue} */}
            {/* /> */}
            {isMarkerShown && (
                <Marker
                    position={{
                        lat: cords.lat,
                        lng: cords.lng
                    }}
                />
            )}

        </GoogleMap>
    </div>
));

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
