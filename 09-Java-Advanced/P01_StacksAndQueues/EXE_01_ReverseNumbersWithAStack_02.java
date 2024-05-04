package P01_StacksAndQueues;

import java.util.*;

public class EXE_01_ReverseNumbersWithAStack_02 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String input = scanner.nextLine();

        // Split the input line by spaces and collect the integers into a list
        // ["1", "2", "3", "4", "5"]  -  LIST
        List<String> numbersList = Arrays
                .asList(input.split("\\s+"));

        // Reverse the numbersList
        Collections.reverse(numbersList);

        ArrayDeque<String> stack = new ArrayDeque<>();
        stack.addAll(numbersList);

        while (!stack.isEmpty()) {
            System.out.print(stack.pop() + " ");
        }
    }
}
