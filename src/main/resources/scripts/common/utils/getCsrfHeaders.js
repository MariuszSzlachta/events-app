import _ from "lodash";

export const getCsrfHeaders = () => {
    const csrf = document.querySelector("meta[name=\"_csrf_token\"]");
    const csrfContent = !_.isEmpty && csrf.getAttribute("content");

    const csrfHeader = document.querySelector("meta[name=\"_csrf_header\"]");
    const csrfHeaderContent = !_.isEmpty && csrfHeader.getAttribute("content");

    return {
        "X-Requested-With": "XMLHttpRequest",
        [csrfHeaderContent]: csrfContent
    };
};
