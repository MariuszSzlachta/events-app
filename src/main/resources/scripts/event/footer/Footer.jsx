import PropTypes from "prop-types";
import React from "react";
import { FormattedMessage } from "react-intl";

import Button from "Common/components/button/Button";
import "./footer.scss";

const Footer = ({ footerAction }) => (
    <footer className="event-footer">
        <Button
            type="button"
            variant="primary"
            classNames="event__button"
            onClick={footerAction}
        >
            <FormattedMessage id="event.join" />
        </Button>
    </footer>
);

export default Footer;

Footer.propTypes = {
    footerAction: PropTypes.func.isRequired
};
