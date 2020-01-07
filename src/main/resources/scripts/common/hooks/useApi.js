import { HTTP_METHODS } from "App/scripts/common/Enums";
import { restService } from "Common/services";
import { useEffect, useState } from "react";

export const useApi = (
    url,
    body = {},
    method = HTTP_METHODS.GET,
    deps = []
) => {
    const [isLoading, setIsLoading] = useState(false);
    const [hasErrorOccurred, setHasErrorOccurred] = useState(false);
    const [data, setData] = useState(null);

    const executeRequest = async () => {
        try {
            setIsLoading(true);
            const response = await restService[method](url, body);
            setData(response);
        } catch (error) {
            setHasErrorOccurred(true);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        async function fetch() {
            await executeRequest();
        }
        fetch();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [...deps]);

    return [data, isLoading, hasErrorOccurred];
};
