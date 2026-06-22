// Product class represents a single product in the e-commerce platform.
public class Product {

    // Attributes of the product
    int productId;
    String productName;
    String category;

    // Constructor to initialize product details
    public Product(int productId, String productName, String category) {
        this.productId = productId;
        this.productName = productName;
        this.category = category;
    }

    // here display method prints product information
    public void display() {
        System.out.println("Product ID : " + productId);
        System.out.println("Product Name : " + productName);
        System.out.println("Category : " + category);
    }
}