import PropTypes from "prop-types";
import React from "react";
import { isNil } from "lodash";
import { Loader } from "Common/components";
import { HTTP_METHODS } from "Common/Enums";
import { EVENT_DETAILS_URL_PREFIX } from "Common/Urls";
import { useApi } from "Common/hooks";
import Content from "Event/content/Content";

const Event = ({ id }) => {
    const [event, isLoading] = useApi(`${EVENT_DETAILS_URL_PREFIX}/${id}`, {}, HTTP_METHODS.GET, []);

    const navigateToExternalUrl = url => window.location.replace(url);

    if (isLoading) {
        return (
            <Loader />
        );
    }

    if (!isNil(event)) {
        return (
            <Content
                content={event}
                navigateToExternalUrl={navigateToExternalUrl}
            />
        );
    }

    return <span>zaślepka brak eventu</span>;
};

Event.propTypes = {
    id: PropTypes.string.isRequired
};

export default Event;
