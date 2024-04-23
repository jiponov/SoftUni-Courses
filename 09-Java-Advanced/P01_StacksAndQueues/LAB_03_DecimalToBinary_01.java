package P01_StacksAndQueues;
// 100/100
// ARRAY DEQUE

import java.util.ArrayDeque;
import java.util.Scanner;

public class LAB_03_DecimalToBinary_01 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        ArrayDeque<Integer> stack = new ArrayDeque<>();
        int decimal = Integer.parseInt(scanner.nextLine());

        if (decimal == 0) {
            stack.push(0);
        } else {
            while (decimal > 0) {
                stack.push(decimal % 2);
                decimal /= 2;
            }
        }

        while (!stack.isEmpty()) {
            System.out.print(stack.pop());
        }
    }
}