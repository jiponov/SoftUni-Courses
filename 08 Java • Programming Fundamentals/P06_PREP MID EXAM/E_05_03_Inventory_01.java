package P06_PREP_MID_EXAM;
// 100/100

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class E_05_03_Inventory_01 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        List<String> journal = Arrays
                .stream(scanner.nextLine().split(", "))
                .collect(Collectors.toList());

        while (scanner.hasNextLine()) {
            String input = scanner.nextLine();
            if (input.equals("Craft!")) {
                break;
            }

            List<String> token = Arrays
                    .stream(input.split(" - "))
                    .collect(Collectors.toList());
            String command = token.get(0);

            if (command.equals("Collect")) {
                String item = token.get(1);
                if (!journal.contains(item)) {
                    journal.add(item);
                }

            } else if (command.equals("Drop")) {
                String item = token.get(1);
                if (journal.contains(item)) {
                    journal.remove(String.valueOf(item));
                }

            } else if (command.equals("Combine Items")) {
                List<String> items = Arrays
                        .stream((token.get(1)).split(":"))
                        .collect(Collectors.toList());
                String oldItem = items.get(0);
                String newItem = items.get(1);
                if (journal.contains(oldItem)) {
                    int indexOldItem = journal.indexOf(oldItem);
                    int indexNewItem = indexOldItem + 1;

                    journal.add(indexNewItem, newItem);
                }

            } else if (command.equals("Renew")) {
                String item = token.get(1);
                if (journal.contains(item)) {
                    journal.remove(item);
                    journal.add(item);
                }
            }
        }

        System.out.println(String.join(", ", journal));
    }
}