import { ComputerVisionClient } from "@azure/cognitiveservices-computervision";
import { ApiKeyCredentials } from "@azure/ms-rest-js";

const computerVisionClient = () => {
    const endpoint: any = process.env.endpoint
    const key: any = process.env.api_key;

    const client = new ComputerVisionClient(new ApiKeyCredentials({ inHeader: { "Ocp-Apim-Subscription-Key": key } }), endpoint);

    return client;
};

export default computerVisionClient;