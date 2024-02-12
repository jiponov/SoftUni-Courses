package P06_PREP_MID_EXAM;

import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class E_01_03_MemoryGame_01 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String strings = scanner.nextLine();
        List<String> elements = Arrays
                .stream(strings.split(" "))
                .collect(Collectors.toList());

        int moves = 0;

        String line = scanner.nextLine();

        while (!line.equals("end")) {
            List<Integer> positions = Arrays
                    .stream(line.split(" "))
                    .map(Integer::parseInt)
                    .collect(Collectors.toList());

            int index1 = positions.get(0);
            int index2 = positions.get(1);

            line = scanner.nextLine();

            moves++;

            if (index1 == index2 || index1 > elements.size() - 1 || index2 > elements.size() - 1 || index1 < 0 || index2 < 0) {
                int indexMiddle = (int) Math.floor(elements.size() / 2);
                String newItem = "-" + moves + "a";
                elements.add(indexMiddle, newItem);
                elements.add(indexMiddle + 1, newItem);
                System.out.println("Invalid input! Adding additional elements to the board");
                continue;
            }

            String el1 = elements.get(index1);
            String el2 = elements.get(index2);

            if (el1.equals(el2)) {
                elements.remove(el1);
                elements.remove(el2);
                System.out.printf("Congrats! You have found matching elements - %s!\n", el1);
            } else {
                System.out.println("Try again!");
                continue;
            }

            if (elements.isEmpty()) {
                System.out.printf("You have won in %d turns!\n", moves);
                return;
            }
        }

        if (!elements.isEmpty()) {
            System.out.printf("Sorry you lose :(\n" +
                    "%s\n", String.join(" ", elements));
        }
    }
}

// 100/100