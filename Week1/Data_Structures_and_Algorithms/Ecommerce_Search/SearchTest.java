// Main class to test Linear Search and Binary Search.

public class SearchTest {

    public static void main(String[] args) {

        // here i'm Creating product objects
        Product[] products = {

                new Product(101, "Bag", "Accessories"),
                new Product(102, "Bottle", "Kitchen"),
                new Product(103, "Laptop", "Electronics"),
                new Product(104, "Mobile", "Electronics"),
                new Product(105, "Watch", "Fashion")

        };

        System.out.println("LINEAR SEARCH");
        System.out.println("----------------");

        Product linearResult = SearchAlgorithms.linearSearch(products, "Mobile");

        if (linearResult != null) {
            linearResult.display();
        } else {
            System.out.println("Product Not Found");
        }

        System.out.println();

        System.out.println("BINARY SEARCH");
        System.out.println("----------------");

        Product binaryResult = SearchAlgorithms.binarySearch(products, "Mobile");

        if (binaryResult != null) {
            binaryResult.display();
        } else {
            System.out.println("Product Not Found");
        }

        System.out.println();

        // Complexity Analysis
        System.out.println("Time Complexity");
        System.out.println("----------------");
        System.out.println("Linear Search : Best O(1), Average O(n), Worst O(n)");
        System.out.println("Binary Search : Best O(1), Average O(log n), Worst O(log n)");
    }
}