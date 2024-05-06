package P01_StacksAndQueues;
// 87/100

// ARRAY DEQUE

import java.util.ArrayDeque;
import java.util.Collections;
import java.util.PriorityQueue;
import java.util.Comparator;
import java.util.Scanner;

public class EXE_05_BalancedParentheses_02 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String input = scanner.nextLine();

        // стек с отворени скоби
        ArrayDeque<Character> openStack = new ArrayDeque<>();
        // опашка със затворени скоби
        ArrayDeque<Character> closedQueue = new ArrayDeque<>();

        for (int i = 0; i < input.length(); i++) {
            char currentBracket = input.charAt(i);

            if (currentBracket == '(' || currentBracket == '[' || currentBracket == '{') {
                openStack.push(currentBracket);
            } else if (currentBracket == ')' || currentBracket == ']' || currentBracket == '}') {
                closedQueue.offer(currentBracket);
            }
        }

        if (openStack.size() != closedQueue.size()) {
            System.out.println("NO");
            return;
        }

        boolean areBalanced = false;

        while (!openStack.isEmpty() && !closedQueue.isEmpty()) {
            char lastOpen = openStack.pop();
            char firstIn = closedQueue.poll();

            if (lastOpen == '(' && firstIn == ')') {
                areBalanced = true;
            } else if (lastOpen == '[' && firstIn == ']') {
                areBalanced = true;
            } else if (lastOpen == '{' && firstIn == '}') {
                areBalanced = true;
            } else {
                areBalanced = false;
                break;
            }
        }

        if (areBalanced) {
            System.out.println("YES");
        } else {
            System.out.println("NO");
        }

        // OR:  Ternary operator
        // System.out.println(areBalanced ? "YES" : "NO");
    }
}