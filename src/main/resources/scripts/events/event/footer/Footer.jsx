import PropTypes from "prop-types";
import React from "react";
import { FormattedMessage } from "react-intl";

import { Button } from "Common/components";
import "Event/footer/footer.scss";

const Footer = ({ handleClick }) => (
    <footer className="event-footer">
        <Button
            type="button"
            variant="primary"
            classNames="event__button"
            onClick={handleClick}
        >
            <FormattedMessage id="event.join" />
        </Button>
    </footer>
);

export default Footer;

Footer.propTypes = {
    handleClick: PropTypes.func.isRequired
};
