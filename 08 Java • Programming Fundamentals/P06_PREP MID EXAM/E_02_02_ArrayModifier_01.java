package P06_PREP_MID_EXAM;
// 100/100

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class E_02_02_ArrayModifier_01 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        List<Integer> numbers = Arrays.stream(scanner.nextLine().split(" ")).map(Integer::parseInt).collect(Collectors.toList());

        while (scanner.hasNextLine()) {
            String input = scanner.nextLine();
            if (input.equals("end")) {
                break;
            }

            List<String> line = Arrays
                    .stream(input.split(" "))
                    .collect(Collectors.toList());

            String command = line.get(0);
            if (command.equals("swap")) {
                int index1 = Integer.parseInt(line.get(1));
                int index2 = Integer.parseInt(line.get(2));
                int el1 = numbers.get(index1);
                int el2 = numbers.get(index2);
                int waiting = el1;
                el1 = el2;
                el2 = waiting;
                numbers.set(index1, el1);
                numbers.set(index2, el2);

            } else if (command.equals("multiply")) {
                int index1 = Integer.parseInt(line.get(1));
                int index2 = Integer.parseInt(line.get(2));
                int el1 = numbers.get(index1);
                int el2 = numbers.get(index2);
                el1 *= el2;
                numbers.set(index1, el1);

            } else if (command.equals("decrease")) {
                numbers = numbers
                        .stream()
                        .map(e -> e - 1)
                        .collect(Collectors.toList());
            }
        }

        List<String> numbersAsString = new ArrayList<>();
        for (int num : numbers) {
            numbersAsString.add(String.valueOf(num));
        }

        System.out.println(String.join(", ", numbersAsString));
    }
}