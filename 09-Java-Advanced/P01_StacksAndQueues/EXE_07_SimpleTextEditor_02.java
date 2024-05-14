package P01_StacksAndQueues;
// 100/100
// ARRAY DEQUE

import java.util.ArrayDeque;
import java.util.Scanner;

public class EXE_07_SimpleTextEditor_02 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // STRING BUILDER

        int n = Integer.parseInt(scanner.nextLine());   // брой команди
        StringBuilder currentText = new StringBuilder();
        ArrayDeque<String> stateStack = new ArrayDeque<>();

        for (int i = 0; i < n; i++) {
            String command = scanner.nextLine();   // текст на команда

            if (command.startsWith("1")) {
                // преди модификация съхраняваме текущото състояние преди промяната
                stateStack.push(currentText.toString());
                // command = "1 {string}".split(" ") -> ["1", "{string}"]
                String textToAppend = command.split("\\s+")[1];
                currentText.append(textToAppend);

            } else if (command.startsWith("2")) {
                // преди модификация съхраняваме текущото състояние преди промяната
                stateStack.push(currentText.toString());
                // command = "2 5".split(" ") -> ["2", "5"]
                int count = Integer.parseInt(command.split("\\s+")[1]);
                // изтрием последните count на брой символа
                // "Desislava" -> count = 2 -> "Desisla"
                // "table" -> count = 3 -> "ta"
                int startIndexForDelete = currentText.length() - count;
                currentText.delete(startIndexForDelete, currentText.length());

            } else if (command.startsWith("3")) {
                // command = "3 7".split(" ") -> ["3", "7"]
                int position = Integer.parseInt(command.split("\\s+")[1]); // мястото на буквата в думата
                System.out.println(currentText.charAt(position - 1));

            } else if (command.equals("4")) {
                // command = "4"
                // !!!
                if (!stateStack.isEmpty()) {
                    String last = stateStack.pop();
                    currentText = new StringBuilder(last);
                }
            }
        }
    }
}