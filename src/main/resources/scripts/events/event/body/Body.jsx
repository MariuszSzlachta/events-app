import PropTypes from "prop-types";
import React from "react";

import "./body.scss";

const Body = ({ children }) => (
    <div className="event-body">
        {children}
    </div>
);

Body.propTypes = {
    children: PropTypes.instanceOf(Array).isRequired
};

export default Body;
