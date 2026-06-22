// This class contains Linear Search and Binary Search methods.
public class SearchAlgorithms {

    // Linear Search Method means checks every product one by one until a match is found.
    public static Product linearSearch(Product[] products, String key) {

        for (int i = 0; i < products.length; i++) {

            if (products[i].productName.equalsIgnoreCase(key)) {
                return products[i];
            }
        }

        return null;
    }

    // Binary Search Method means array should already be sorted by product name.
    public static Product binarySearch(Product[] products, String key) {

        int low = 0;
        int high = products.length - 1;

        while (low <= high) {

            int mid = (low + high) / 2;

            int result = products[mid].productName.compareToIgnoreCase(key);

            if (result == 0) {
                return products[mid];
            } else if (result < 0) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

        return null;
    }
}