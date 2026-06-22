public class PdfFactory extends DocumentFactory {

    @Override
    public Document createDocument() {

        // Creating and returning a PDF document object
        return new PdfDocument();
    }
}