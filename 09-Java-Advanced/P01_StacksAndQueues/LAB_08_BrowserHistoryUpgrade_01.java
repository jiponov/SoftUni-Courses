package P01_StacksAndQueues;

// 100/100
// ARRAY DEQUE

import java.util.ArrayDeque;
import java.util.PriorityQueue;
import java.util.Comparator;
import java.util.Scanner;

public class LAB_08_BrowserHistoryUpgrade_01 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        ArrayDeque<String> browserHistory = new ArrayDeque<>();
        ArrayDeque<String> forwardHistory = new ArrayDeque<>();

        String command;
        while (!"Home".equals(command = scanner.nextLine())) {

            if (command.equals("back")) {
                if (browserHistory.size() < 2) {
                    System.out.println("no previous URLs");
                } else {
                    forwardHistory.addFirst(browserHistory.peek());
                    browserHistory.pop();
                    System.out.println(browserHistory.peek());
                }

            } else if (command.equals("forward")) {
                if (forwardHistory.size() < 1) {
                    System.out.println("no next URLs");
                } else {
                    System.out.println(forwardHistory.peek());
                    browserHistory.push(forwardHistory.pop());
                }

            } else {
                System.out.println(command);
                browserHistory.push(command);
                forwardHistory.clear();
            }
        }
    }
}