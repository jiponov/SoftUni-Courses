package P01_StacksAndQueues;
// 100/100
// ARRAY DEQUE

import java.util.ArrayDeque;
import java.util.Collections;
import java.util.PriorityQueue;
import java.util.Comparator;
import java.util.Scanner;

public class EXE_05_BalancedParentheses_01 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // "{[()]}".toCharArray() -> ['{', '[', '(' ...]
        String input = scanner.nextLine();

        // стек с отворени скоби
        ArrayDeque<Character> openBracketsStack = new ArrayDeque<>();
        // дали скобите са балансирани
        boolean areBalanced = false;
        // true -> скобите са балансирани
        // false -> скобите не са балансирани

        for (char bracket : input.toCharArray()) {
            // скоба отворена -> (, [, { -> stack
            if (bracket == '(' || bracket == '[' || bracket == '{') {
                openBracketsStack.push(bracket);
            }

            // скоба затворена -> ), ], }
            else if (bracket == ')' || bracket == ']' || bracket == '}') {
                // затворената скоба съвапада с последната добавена отворена

                // !  ПРОВЕРКА дали има елементи на мястото, от което ще премахваме  !
                if (openBracketsStack.isEmpty()) {
                    areBalanced = false;
                    break;
                }

                char lastOpenBracket = openBracketsStack.pop();

                // ПРОВЕРКА дали има баланс между текущата затворена и последната отворена
                // 1. ( и )
                if (lastOpenBracket == '(' && bracket == ')') {
                    // баланс
                    areBalanced = true;
                }
                // 2. [ и ]
                else if (lastOpenBracket == '[' && bracket == ']') {
                    // баланс
                    areBalanced = true;
                }
                // 3. { и }
                else if (lastOpenBracket == '{' && bracket == '}') {
                    // баланс
                    areBalanced = true;
                } else {
                    // нямаме баланс
                    areBalanced = false;
                    break;
                }
            }
        }

        // преминали през всички скоби или сме намерили небалансирани скоби
        // ако има баланс -> YES
        if (areBalanced) {
            System.out.println("YES");
        }
        // ако няма баланс -> NO
        else {
            System.out.println("NO");
        }
    }
}