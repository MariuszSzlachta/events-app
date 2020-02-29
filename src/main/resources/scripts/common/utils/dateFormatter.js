import { getAppLanguage } from "Common/utils";
import moment from "moment";

const _date = Symbol();
const _language = Symbol();
const _createDateTimeObject = Symbol();


export class DateFormatter {
    constructor(date) {
        if (!date) {
            throw new Error("you must provide date");
        }
        this[_date] = date;
        this[_language] = getAppLanguage();
    }

    get formats() {
        return ({
            LOCAL_FULL: "dddd, LL",
            LOCAL_NUMERIC_WITH_FULL_DAY: "L dddd",
            ISO: "YYYY-MM-DD",
            ISO_WITH_24H: "YYYY-MM-DD HH:mm"
        });
    }

    get format() {
        return {
            toLocalFull: () => this[_createDateTimeObject]().format(this.formats.LOCAL_FULL),
            toIso: () => this[_createDateTimeObject]().format(this.formats.ISO),
            toIsoWith24h: () => this[_createDateTimeObject]().format(this.formats.ISO_WITH_24H)
        };
    }

    [_createDateTimeObject]() {
        return moment(this[_date]).locale(this[_language]);
    }
}
