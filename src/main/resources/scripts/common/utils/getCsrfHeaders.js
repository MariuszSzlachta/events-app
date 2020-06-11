import { isEmpty } from "lodash";

export const getCsrfHeaders = () => {
    const csrf = document.querySelector("meta[name=\"_csrf_token\"]");
    const csrfContent = !isEmpty && csrf.getAttribute("content");

    const csrfHeader = document.querySelector("meta[name=\"_csrf_header\"]");
    const csrfHeaderContent = !isEmpty && csrfHeader.getAttribute("content");

    return {
        "X-Requested-With": "XMLHttpRequest",
        [csrfHeaderContent]: csrfContent
    };
};
