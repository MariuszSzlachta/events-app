import { restService } from "Common/services";
import { INTERNATIONALIZATION_MESSAGES_URL } from "Common/Urls";
import { getAppLanguage } from "Common/utils";

class InternationalizationService {
    async initialize() {
        const messages = await restService.get(`${INTERNATIONALIZATION_MESSAGES_URL}/${getAppLanguage()}`);
        window.messages = messages;
        return messages;
    }
}

export const internationalizationService = new InternationalizationService();
