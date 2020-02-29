import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

import PropTypes from "prop-types";
import React from "react";
import { classNameMergeUtil } from "Common/utils";

import "./arrow.scss";

const Arrow = ({ clickHandler, className }) => {
    const classes = classNameMergeUtil(className);

    return (
        <button
            type="button"
            className={`arrow ${classes}`}
            onClick={clickHandler}
        >
            <FontAwesomeIcon icon={faAngleLeft} />
        </button>
    );
};

export default Arrow;

Arrow.propTypes = {
    clickHandler: PropTypes.func.isRequired,
    className: PropTypes.oneOfType([PropTypes.instanceOf(Array), PropTypes.string])
};

Arrow.defaultProps = {
    className: ""
};
