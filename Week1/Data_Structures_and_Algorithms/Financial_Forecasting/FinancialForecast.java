// This class contains a recursive method to predict
// the future value based on a fixed annual growth rate.

public class FinancialForecast {

    // Recursive method to calculate future value
    public static double futureValue(double currentValue, double growthRate, int years) {

        // Base case:
        // If no years are left, return the current value.
        if (years == 0) {
            return currentValue;
        }

        // Recursive case:
        // Increase the current value by the growth rate
        // and call the same method for the remaining years.
        return futureValue(currentValue * (1 + growthRate), growthRate, years - 1);
    }
}