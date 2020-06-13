import PropTypes from "prop-types";
import React from "react";
import { FormattedMessage } from "react-intl";

export const Part = ({ messageId, value }) => (
    <p className="event-address__part">
        <span className="event-address__label">
            <FormattedMessage id={messageId} />
        </span>
        <span className="event-address__text">{ value }</span>
    </p>
);

Part.propTypes = {
    messageId: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number.isRequired])
};

Part.defaultProps = {
    value: null
};
