import _ from "lodash";

export const classNameMergeUtil = classes => {
    if (_.isNil(classes)) {
        return "";
    }

    if (classes instanceof Array) {
        return classes.join(" ");
    }

    return classes;
};
