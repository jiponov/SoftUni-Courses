package P06_PREP_MID_EXAM;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class E_04_02_ShoppingList_01 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String products = scanner.nextLine();
        List<String> shoppingList = Arrays
                .stream(products.split("!"))
                .collect(Collectors.toList());

        String line = scanner.nextLine();

        while (!line.equals("Go Shopping!")) {
            List<String> input = Arrays
                    .stream(line.split(" "))
                    .collect(Collectors.toList());

            String command = input.get(0);
            if (command.equals("Urgent")) {
                String item = input.get(1);
                if (!shoppingList.contains(item)) {
                    shoppingList.add(0, item);
                }

            } else if (command.equals("Unnecessary")) {
                String item = input.get(1);
                if (shoppingList.contains(item)) {
                    shoppingList.remove(item);
                }

            } else if (command.equals("Correct")) {
                String oldIitem = input.get(1);
                String newItem = input.get(2);
                if (shoppingList.contains(oldIitem)) {
                    int indexOldItem = shoppingList.indexOf(oldIitem);
                    shoppingList.set(indexOldItem, newItem);
                }

            } else if (command.equals("Rearrange")) {
                String item = input.get(1);
                if (shoppingList.contains(item)) {
                    shoppingList.remove(item);
                    shoppingList.add(item);
                }
            }

            line = scanner.nextLine();
        }

        System.out.println(String.join(", ", shoppingList));
    }
}

// 100/100