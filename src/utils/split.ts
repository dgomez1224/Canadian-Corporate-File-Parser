import { PDFDocument } from "pdf-lib";

export default async (buffer: Buffer) => {
    const pages: Buffer[] = [];
    let numberOfPages: number;

    try {
        const pdfDoc = await PDFDocument.load(buffer);

        numberOfPages = pdfDoc.getPages().length;

        for (let i = 0; i < numberOfPages; i++) {
            // Create a new "sub" document
            const subDocument = await PDFDocument.create();
            // copy the page at current index
            const [copiedPage] = await subDocument.copyPages(pdfDoc, [i]);

            subDocument.addPage(copiedPage);
            const pdfBytes = await subDocument.save();

            pages.push(Buffer.from(pdfBytes));
        }
    } catch (e) {
        throw new Error("Could not split pdf into pages: " + e);
    }
    return { pages, numberOfPages };
};