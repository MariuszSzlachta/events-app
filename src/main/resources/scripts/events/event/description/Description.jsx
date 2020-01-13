import PropTypes from "prop-types";
import React from "react";
import { FormattedMessage } from "react-intl";

import "./description.scss";

const Description = ({ text }) => (
    <div className="event-description">
        <span className="event-description__label">
            <FormattedMessage id="common.description" />
        </span>
        <p className="event-description__text">{text}</p>
    </div>
);

Description.propTypes = {
    text: PropTypes.string.isRequired
};

export default Description;
