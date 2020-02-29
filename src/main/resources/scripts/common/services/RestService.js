import * as axios from "axios";
import { getCsrfHeaders } from "Common/utils";

const _headers = Symbol();
const _service = Symbol();
const _handleError = Symbol();

class RestService {
    constructor() {
        this[_headers] = getCsrfHeaders();
        this[_service] = axios.create();
        this[_service].defaults.headers = getCsrfHeaders();
    }

    get(url) {
        return this[_service].get(url)
            .then(response => response.data)
            .catch(error => this[_handleError](error));
    }

    post(url, body) {
        return this[_service].post(url, body)
            .then(response => response.data)
            .catch(error => this[_handleError](error));
    }

    [_handleError](error) {
        console.error(error);
    }
}

export const restService = new RestService();
