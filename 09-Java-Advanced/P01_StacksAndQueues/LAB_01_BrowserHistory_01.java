package P01_StacksAndQueues;
// 100/100
// ARRAY DEQUE

import java.util.ArrayDeque;
import java.util.Scanner;

public class LAB_01_BrowserHistory_01 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        ArrayDeque<String> stack = new ArrayDeque<>();
        String currentURL = "";

        String line = scanner.nextLine();
        while (!line.equals("Home")) {
            if (line.equals("back")) {
                if (stack.isEmpty()) {
                    System.out.println("no previous URLs");

                    line = scanner.nextLine();
                    continue;
                }

                // Use pop(), when going back.
                String lastSetURL = stack.pop();
                currentURL = lastSetURL;

            } else {
                if (!currentURL.equals("")) {
                    // Use push(), when moving to the next page.
                    stack.push(currentURL);
                }

                currentURL = line;
            }

            System.out.println(currentURL);

            line = scanner.nextLine();
        }
    }
}