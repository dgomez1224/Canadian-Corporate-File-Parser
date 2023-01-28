import sleep from "./utils/sleep";

export default async (client: any, page: Buffer) => {
    try {
        const buffer = page;
        // computer vision code
        let result = await client.readInStream(buffer, { modelVersion: "2022-04-30" });
        // Operation ID is last path segment of operationLocation (a URL)
        const operation = result.operationLocation.split("/").slice(-1)[0];

        // Wait for read recognition to complete
        // result.status is initially undefined, since it's the result of read
        while (result.status !== "succeeded") {
            await sleep(100); // 100ms
            result = await client.getReadResult(operation);
        }

        const ocrResult = result.analyzeResult.readResults[0].lines.map((line: any) => line.text);

        return ocrResult;
    } catch (e) {
        throw new Error("Executing FR OCR on Classify " + e);
    }
};