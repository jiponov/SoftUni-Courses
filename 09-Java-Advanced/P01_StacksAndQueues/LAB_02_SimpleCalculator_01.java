package P01_StacksAndQueues;
// 100/100
// ARRAY DEQUE

import java.util.ArrayDeque;
import java.util.Scanner;

public class LAB_02_SimpleCalculator_01 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String[] expressionElements = scanner.nextLine().split("\\s+");
        ArrayDeque<String> stack = new ArrayDeque<>();

        for (int i = expressionElements.length - 1; i >= 0; i--) {
            stack.push(expressionElements[i]);
        }

        while (stack.size() > 1) {
            int leftOperand = Integer.parseInt(stack.pop());
            String operator = stack.pop();
            int rightOperand = Integer.parseInt(stack.pop());

            int result = 0;
            if (operator.equals("+")) {
                result += leftOperand + rightOperand;
            } else if (operator.equals("-")) {
                result += leftOperand - rightOperand;
            }

            stack.push(String.valueOf(result));

//            int result = operator.equals("+")
//                    ? leftOperand + rightOperand
//                    : leftOperand - rightOperand;
        }

        System.out.println(stack.pop());
    }
}