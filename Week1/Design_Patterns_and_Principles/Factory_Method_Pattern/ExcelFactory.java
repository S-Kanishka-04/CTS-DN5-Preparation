public class ExcelFactory extends DocumentFactory {

    @Override
    public Document createDocument() {

        // Creating and returning an Excel document object
        return new ExcelDocument();
    }
}