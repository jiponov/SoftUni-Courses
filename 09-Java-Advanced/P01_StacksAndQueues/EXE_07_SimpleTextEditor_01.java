package P01_StacksAndQueues;
// 100/100
// ARRAY DEQUE

import java.util.ArrayDeque;
import java.util.Deque;
import java.util.Scanner;

public class EXE_07_SimpleTextEditor_01 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // STRING

        int n = Integer.parseInt(scanner.nextLine());
        ArrayDeque<String> stateStack = new ArrayDeque<>();
        String text = "";

        for (int i = 0; i < n; i++) {
            String[] token = scanner.nextLine().split("\\s+");

            if (token[0].equals("1")) {
                stateStack.push(text);

                text += token[1];

            } else if (token[0].equals("2")) {
                stateStack.push(text);

                int count = Integer.parseInt(token[1]);
                text = text.substring(0, text.length() - count);

            } else if (token[0].equals("3")) {
                int index = Integer.parseInt(token[1]);
                System.out.println(text.charAt(index - 1));

            } else if (token[0].equals("4")) {
                if (!stateStack.isEmpty()) {
                    text = stateStack.pop();
                }
            }
        }
    }
}