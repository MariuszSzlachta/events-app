import { isNil } from "lodash";

export const classNameMergeUtil = classes => {
    if (isNil(classes)) {
        return "";
    }

    if (classes instanceof Array) {
        return classes.join(" ");
    }

    return classes;
};
