public class WordFactory extends DocumentFactory {

    @Override
    public Document createDocument() {

        // here i'm Creating and returning a Word document object
        return new WordDocument();
    }
}