export const classNameMergeUtil = classes => {
    if (classes instanceof Array) {
        return classes.join(" ");
    }
    return classes;
};
