import PropTypes from "prop-types";
import React from "react";
import { classNameMergeUtil } from "Common/utils";

import "./button.scss";

export const Button = ({
    children,
    variant,
    type = "button",
    onClick,
    onBlur,
    onFocus,
    classNames,
    disabled,
    ...restProps
}) => {
    const classes = classNameMergeUtil(classNames);
    return (
        // eslint-disable-next-line react/button-has-type
        <button
            type={type}
            className={`button button--${variant} ${classes}`}
            onClick={onClick}
            onBlur={onBlur}
            onFocus={onFocus}
            {...restProps}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    classNames: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Array)]),
    onBlur: PropTypes.func,
    onClick: PropTypes.func.isRequired,
    onFocus: PropTypes.func,
    type: PropTypes.string,
    variant: PropTypes.string,
    disabled: PropTypes.bool
};

Button.defaultProps = {
    onBlur: () => {},
    onFocus: () => {},
    type: "button",
    variant: "primary",
    classNames: "",
    disabled: false
};
