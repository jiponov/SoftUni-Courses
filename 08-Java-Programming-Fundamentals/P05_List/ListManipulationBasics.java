package P05_List;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class ListManipulationBasics {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String lineOfStrings = scanner.nextLine();
        List<Integer> numbersList = Arrays
                .stream(lineOfStrings.split(" "))
                .map(Integer::parseInt)
                .collect(Collectors.toList());

        String line = scanner.nextLine();

        while (!line.equals("end")) {
            List<String> tokens = Arrays
                    .stream(line.split(" "))
                    .collect(Collectors.toList());

            String command = tokens.get(0);

            if (command.equals("Add")) {
                int number = Integer.parseInt(tokens.get(1));
                numbersList.add(number);

            } else if (command.equals("Remove")) {
                int number = Integer.parseInt(tokens.get(1));
                numbersList.remove(Integer.valueOf(number));

            } else if (command.equals("RemoveAt")) {
                int number = Integer.parseInt(tokens.get(1));
                numbersList.remove(number);

            } else if (command.equals("Insert")) {
                int number = Integer.parseInt(tokens.get(1));
                int index = Integer.parseInt(tokens.get(2));
                numbersList.add(index, number);
            }

            line = scanner.nextLine();
        }

        List<String> stringListAsOutput = numbersList
                .stream()
                .map(String::valueOf)
                .collect(Collectors.toList());

        System.out.println(String.join(" ", stringListAsOutput));
    }
}

// 100/100