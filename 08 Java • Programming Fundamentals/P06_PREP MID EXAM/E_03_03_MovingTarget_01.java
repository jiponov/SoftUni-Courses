package P06_PREP_MID_EXAM;
// 100/100

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class E_03_03_MovingTarget_01 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        List<Integer> targets = Arrays
                .stream(scanner.nextLine().split(" "))
                .map(Integer::parseInt)
                .collect(Collectors.toList());

        String input = scanner.nextLine();

        while (!input.equals("End")) {
            List<String> stringsList = Arrays
                    .stream(input.split(" "))
                    .collect(Collectors.toList());

            String command = stringsList.get(0);

            if (command.equals("Shoot")) {
                int index = Integer.parseInt(stringsList.get(1));
                int power = Integer.parseInt(stringsList.get(2));
                boolean isValidIndex = validateIndex(targets, index);
                if (isValidIndex) {
                    int element = targets.get(index);
                    targets.set(index, element - power);
                    element = targets.get(index);
                    if (element <= 0) {
                        targets.remove(index);
                    }
                }

            } else if (command.equals("Add")) {
                int index = Integer.parseInt(stringsList.get(1));
                int value = Integer.parseInt(stringsList.get(2));
                boolean isValidIndex = validateIndex(targets, index);
                if (isValidIndex) {
                    targets.add(index, value);
                } else {
                    System.out.println("Invalid placement!");
                }

            } else if (command.equals("Strike")) {
                int index = Integer.parseInt(stringsList.get(1));
                int radius = Integer.parseInt(stringsList.get(2));
                boolean isValidIndex = validateIndex(targets, index);

                if (isValidIndex) {
                    int indexBefore = index - radius;
                    int indexAfter = index + radius;
                    boolean isValidIndexBefore = validateIndex(targets, indexBefore);
                    boolean isValidIndexAfter = validateIndex(targets, indexAfter);

                    if (isValidIndexBefore && isValidIndexAfter) {
                        targets.subList(indexBefore, indexAfter + 1).clear();
                    } else {
                        System.out.println("Strike missed!");
                    }
                } else {
                    System.out.println("Strike missed!");
                }
            }

            input = scanner.nextLine();
        }

        List<String> targetsAsString = new ArrayList<>();
        targets.forEach(e -> targetsAsString.add(String.valueOf(e)));

        System.out.println(String.join("|", targetsAsString));
    }

    private static boolean validateIndex(List<Integer> targets, int index) {
        if (index >= 0 && index <= targets.size() - 1) {
            return true;
        }
        return false;
    }
}