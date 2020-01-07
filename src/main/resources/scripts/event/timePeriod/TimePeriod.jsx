import PropTypes from "prop-types";
import { DateFormatter } from "Common/utils/dateFormatter";
import React from "react";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./timePeriod.scss";

const TimePeriod = ({ dateFrom, dateTo }) => {
    const formattedDateFrom = new DateFormatter(dateFrom).format.toIsoWith24h();
    const formattedDateTo = new DateFormatter(dateTo).format.toIsoWith24h();

    return (
        <div className="time-period">
            <FontAwesomeIcon icon={faCalendarAlt} className="time-period__icon" />
            <span className="time-period__date">{formattedDateFrom}</span>
            <span className="time-period__separator">-</span>
            <span className="time-period__date">{formattedDateTo}</span>
        </div>
    );
};

TimePeriod.propTypes = {
    dateFrom: PropTypes.string.isRequired,
    dateTo: PropTypes.string.isRequired
};

export default TimePeriod;
