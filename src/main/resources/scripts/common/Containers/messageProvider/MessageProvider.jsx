import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import _ from "lodash";
import { getAppLanguage } from "Common/utils";
import { internationalizationService } from "Common/services";

export const MessageProvider = ({ children }) => {
    const [locale, setLocale] = useState(null);
    const [messages, setMessages] = useState(null);

    useEffect(() => {
        async function init() {
            const intlMessages = await internationalizationService.initialize();
            setMessages(intlMessages);
            setLocale(getAppLanguage());
        }
        init();
    }, []);


    if (!_.isNull(messages) && !_.isNull(locale)) {
        return (
            children(messages, locale)
        );
    }
    // todo add spinner here
    return <span>loading...</span>;
};

MessageProvider.propTypes = {
    children: PropTypes.func.isRequired
};
