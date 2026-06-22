public interface Document {

    // Every document type should provide its own implementation for opening the document. 
    void open();
}