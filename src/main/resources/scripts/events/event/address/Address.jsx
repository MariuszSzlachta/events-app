import PropTypes from "prop-types";
import React from "react";
import { Part } from "./part/Part";

import "./address.scss";

const Address = ({
    address: {
        city, street, buildingNumber, localNumber
    }
}) => (
    <address className="event-address">
        <Part messageId="event.address.city" value={city} />
        <Part messageId="event.address.street" value={street} />
        <Part messageId="event.address.buildingNumber" value={buildingNumber} />
        {localNumber && <Part messageId="event.address.localNumber" value={localNumber} />}
    </address>
);

Address.propTypes = {
    address: PropTypes.shape({
        city: PropTypes.string.isRequired,
        street: PropTypes.string.isRequired,
        buildingNumber: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number.isRequired]),
        localNumber: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number.isRequired])
    }).isRequired
};

export default Address;
