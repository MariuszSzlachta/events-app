import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import Content from "Event/content/Content";
import { HTTP_METHODS } from "Common/Enums";
import { EVENT_DETAILS_URL } from "Common/Urls";
import { useApi } from "Common/hooks";

const Event = ({ id = 1 }) => {
    const navigateToExternalUrl = url => window.location.replace(url);

    const [event, isLoading, hasErrorOccurred] = useApi(`${EVENT_DETAILS_URL}/${id}`, {}, HTTP_METHODS.GET, []);

    if (isLoading) {
        return <span>loading...</span>;
    }

    if (!_.isNil(event)) {
        return (
            <Content
                content={event}
                navigateToExternalUrl={navigateToExternalUrl}
            />
        );
    }

    return hasErrorOccurred && <span>zaślepka</span>;
};

Event.propTypes = {
    id: PropTypes.number.isRequired
};

export default Event;
