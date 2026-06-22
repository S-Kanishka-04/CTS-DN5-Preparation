import java.util.Scanner;

// Main class to test the financial forecasting program.
public class ForecastTest {

    public static void main(String[] args) {

        // Create Scanner object to get input from the user.
        Scanner sc = new Scanner(System.in);

        // Read the current investment amount.
        System.out.print("Enter Current Value: ");
        double currentValue = sc.nextDouble();

        // Read the annual growth rate.
        // Example: For 10%, enter 0.10
        System.out.print("Enter Growth Rate (Example: 0.10 for 10%): ");
        double growthRate = sc.nextDouble();

        // Read the number of years.
        System.out.print("Enter Number of Years: ");
        int years = sc.nextInt();

        // Call the recursive method to calculate future value.
        double future = FinancialForecast.futureValue(currentValue, growthRate, years);

        // Display the predicted future value.
        System.out.println("\nPredicted Future Value: " + future);

        // Display time complexity information.
        System.out.println("\nTime Complexity Analysis");
        System.out.println("Recursive Solution : O(n)");
        System.out.println("Optimized Iterative Solution : O(n)");
        System.out.println("Memoization can be used to avoid repeated calculations.");

        // Close the Scanner object.
        sc.close();
    }
}