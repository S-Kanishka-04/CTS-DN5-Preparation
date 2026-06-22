public class SingletonTest {

    public static void main(String[] args) {
    	// I'm Getting Logger object for the first time.
        Logger logger1 = Logger.getInstance();
        // Trying to get another Logger object.
        Logger logger2 = Logger.getInstance();
        //& here im Using both references to print log messages.
        logger1.log("First Message");
        logger2.log("Second Message");
        // Checking whether both references point to the same object.
        System.out.println(logger1 == logger2);
    }
}
