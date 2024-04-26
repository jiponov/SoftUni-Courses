package P01_StacksAndQueues;
// 100/100
// ARRAY DEQUE

import java.util.ArrayDeque;
import java.util.Scanner;

public class LAB_05_PrinterQueue_01 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        ArrayDeque<String> queue = new ArrayDeque<>();

        String line = scanner.nextLine();
        while (!line.equals("print")) {

            if (line.equals("cancel")) {
                if (queue.isEmpty()) {
                    System.out.println("Printer is on standby");

                    line = scanner.nextLine();
                    continue;
                }

                String cancelledDocument = queue.poll();   // =REMOVE, PRINTING FILE
                System.out.println("Canceled " + cancelledDocument);

            } else {
                queue.offer(line);   // =ADD FILE
            }

            line = scanner.nextLine();
        }

        while (!queue.isEmpty()) {
            System.out.println(queue.poll());
        }
    }
}