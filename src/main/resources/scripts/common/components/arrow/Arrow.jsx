import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

import PropTypes from "prop-types";
import React from "react";
import { classNameMergeUtil } from "Common/utils";

import "./arrow.scss";

export const Arrow = ({ handleClick, className }) => {
    const classes = classNameMergeUtil(className);

    return (
        <button
            type="button"
            className={`arrow ${classes}`}
            onClick={handleClick}
        >
            <FontAwesomeIcon icon={faAngleLeft} />
        </button>
    );
};

Arrow.propTypes = {
    handleClick: PropTypes.func.isRequired,
    className: PropTypes.oneOfType([PropTypes.instanceOf(Array), PropTypes.string])
};

Arrow.defaultProps = {
    className: ""
};
