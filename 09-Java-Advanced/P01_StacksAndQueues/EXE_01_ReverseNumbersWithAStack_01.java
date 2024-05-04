package P01_StacksAndQueues;

// 100/100
// ARRAY DEQUE

import java.util.ArrayDeque;
import java.util.PriorityQueue;
import java.util.Comparator;
import java.util.Scanner;

public class EXE_01_ReverseNumbersWithAStack_01 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String input = scanner.nextLine();

        // ["1", "2", "3", "4", "5"]
        String[] inputNumbers = input.split("\\s+");

        ArrayDeque<String> stack = new ArrayDeque<>();
        for (String number : inputNumbers) {
            stack.push(number);
        }

        while (!stack.isEmpty()) {
            System.out.print(stack.pop() + " ");
        }
    }
}

// "1 2 3 4 5"
// всички числа да ги сложим в стек
// повтаряме: вадим число от стека  ->  докато стека е пълен
// спираме: стекът стане празен -> stack.isEmpty()