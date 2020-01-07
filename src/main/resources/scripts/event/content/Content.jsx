import React from "react";
import PropTypes from "prop-types";

import TimePeriod from "Event/timePeriod/TimePeriod";
import Header from "../header/Header";
import Body from "../body/Body";
import Footer from "../footer/Footer";
import Description from "../description/Description";

const Content = ({
    content: {
        id,
        name,
        description,
        externalUrl,
        dateFrom,
        dateTo
    },
    navigateToExternalUrl
}) => (
    <article className="event-box">
        <Header headingText={name} eventId={id} />
        <Body>
            <TimePeriod dateFrom={dateFrom} dateTo={dateTo} />
            <Description text={description} />
        </Body>
        <Footer footerAction={() => navigateToExternalUrl(externalUrl)} />
    </article>
);

Content.propTypes = {
    content: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        externalUrl: PropTypes.string,
        dateFrom: PropTypes.string.isRequired,
        dateTo: PropTypes.string.isRequired
    }).isRequired,
    navigateToExternalUrl: PropTypes.func.isRequired
};

export default Content;
