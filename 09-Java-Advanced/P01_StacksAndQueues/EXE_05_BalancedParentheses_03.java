package P01_StacksAndQueues;
// 100/100
// ARRAY DEQUE

import java.util.ArrayDeque;
import java.util.Scanner;

public class EXE_05_BalancedParentheses_03 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String input = scanner.nextLine();

        ArrayDeque<Character> stack = new ArrayDeque<>();

        for (char bracket : input.toCharArray()) {
            if (bracket == '(' || bracket == '[' || bracket == '{') {
                stack.push(bracket);
            } else {
                if (stack.isEmpty()) {
                    System.out.println("NO");
                    return;
                }

                char top = stack.pop();

                if ((bracket == ')' && top != '(') ||
                        (bracket == ']' && top != '[') ||
                        (bracket == '}' && top != '{')) {
                    System.out.println("NO");
                    return;
                }
            }
        }

        if (stack.isEmpty()) {
            System.out.println("YES");
        } else {
            System.out.println("NO");
        }
    }
}