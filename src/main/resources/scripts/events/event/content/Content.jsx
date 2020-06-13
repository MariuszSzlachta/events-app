import Address from "Event/address/Address";
import React from "react";
import PropTypes from "prop-types";

import TimePeriod from "Event/timePeriod/TimePeriod";
import Header from "Event/header/Header";
import Body from "Event/body/Body";
import Footer from "Event/footer/Footer";
import Description from "Event/description/Description";
import Map from "Event/map/Map";

const Content = ({
    content: {
        id,
        name,
        description,
        externalUrl,
        dateFrom,
        dateTo,
        cords,
        ...addressProps
    },
    navigateToExternalUrl
}) => (
    <article className="event-box">
        <Header headingText={name} eventId={id} />
        <Body>
            <TimePeriod dateFrom={dateFrom} dateTo={dateTo} />
            <Address address={addressProps} />
            <Description text={description} />
            {cords && (
                <Map
                    isMarkerShown
                    cords={{ lat: 52.121333, lng: 21.159800 }}
                    zoom={10}
                    textValue={name}
                    containerElement={<div style={{ height: "400px" }} />}
                    mapElement={<div style={{ height: "100%" }} />}
                    loadingElement={<div style={{ height: "100%" }} />}
                />
            )}
        </Body>
        <Footer handleClick={() => navigateToExternalUrl(externalUrl)} />
    </article>
);

Content.propTypes = {
    content: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        externalUrl: PropTypes.string,
        dateFrom: PropTypes.string.isRequired,
        dateTo: PropTypes.string.isRequired,
        cords: PropTypes.shape({
            lat: PropTypes.number.isRequired,
            lng: PropTypes.number.isRequired
        })
    }).isRequired,
    navigateToExternalUrl: PropTypes.func.isRequired
};

export default Content;
