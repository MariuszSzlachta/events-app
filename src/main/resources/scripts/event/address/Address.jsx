import PropTypes from "prop-types";
import React from "react";

const Address = ({ address }) => (
    <div className="event-address">
        <span className="event-address__label">Address</span>
        <p className="event-address__text">{ address }</p>
    </div>
);

Address.propTypes = {
    address: PropTypes.string.isRequired
};

export default Address;
