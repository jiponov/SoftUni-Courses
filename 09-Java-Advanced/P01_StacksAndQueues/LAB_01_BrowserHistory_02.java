package P01_StacksAndQueues;
// 100/100
// ARRAY DEQUE

import java.util.ArrayDeque;
import java.util.Scanner;

public class LAB_01_BrowserHistory_02 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        ArrayDeque<String> stack = new ArrayDeque<>();

        String currentURL = "no previous URLs";
        stack.push(currentURL);

        String line = scanner.nextLine();
        while (!line.equals("Home")) {

            if (line.equals("back")) {
                if (stack.size() == 1) {
                    String firstElement = stack.peek();
                    System.out.println(firstElement);
                } else {
                    // Use pop(), when going back.
                    String lastSetURL = stack.pop();
                    System.out.println(lastSetURL);
                }

            } else {
                if (!"no previous URLs".equals(currentURL)) {  // NOT Started with: null.  (!currentURL.equals(!"no previous URLs"))  /pointer exception/
                    // Use push(), when moving to the next page.
                    stack.push(currentURL);
                }

                currentURL = line;
                System.out.println(currentURL);
            }

            line = scanner.nextLine();
        }
    }
}