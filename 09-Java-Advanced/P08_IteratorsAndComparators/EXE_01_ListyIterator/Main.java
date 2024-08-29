package P08_IteratorsAndComparators.EXE_01_ListyIterator;

import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        List<String> data = Arrays.stream(scanner.nextLine().split("\\s+"))
                .skip(1)
                .collect(Collectors.toList());

        ListyIterator listyIterator = new ListyIterator(data);

        String command = scanner.nextLine();
        while (!command.equalsIgnoreCase("END")) {
            switch (command) {
                case "Move":
                    System.out.println(listyIterator.move());
                    break;
                case "Print":
                    try {
                        listyIterator.print();
                    } catch (Exception exception) {
                        System.out.println(exception.getMessage());
                    }
                    break;
                case "HasNext":
                    System.out.println(listyIterator.hasNext());
                    break;
            }

            command = scanner.nextLine();
        }

    }
}
