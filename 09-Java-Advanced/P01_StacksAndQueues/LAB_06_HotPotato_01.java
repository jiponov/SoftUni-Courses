package P01_StacksAndQueues;
// 100/100
// ARRAY DEQUE

import java.util.*;
import java.util.stream.Collectors;

public class LAB_06_HotPotato_01 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // ARRAY
        String[] names = scanner.nextLine().split("\\s+");
        int n = Integer.parseInt(scanner.nextLine());

        ArrayDeque<String> children = new ArrayDeque<>();

        Collections.addAll(children, names);

        while (children.size() > 1) {
            for (int i = 1; i < n; i++) {
                String currentChild = children.poll();
                children.offer(currentChild);
            }
            System.out.println("Removed " + children.poll());
        }

        System.out.println("Last is " + children.poll());
    }
}