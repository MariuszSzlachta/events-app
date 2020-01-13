import PropTypes from "prop-types";
import React from "react";
import _ from "lodash";
import Content from "Event/content/Content";
import { HTTP_METHODS } from "Common/Enums";
import { EVENT_DETAILS_URL_PREFIX } from "Common/Urls";
import { useApi } from "Common/hooks";

const Event = ({ id }) => {
    const [event, isLoading, hasErrorOccurred] = useApi(`${EVENT_DETAILS_URL_PREFIX}/${id}`, {}, HTTP_METHODS.GET, []);

    const navigateToExternalUrl = url => window.location.replace(url);

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
    id: PropTypes.string.isRequired
};

export default Event;
