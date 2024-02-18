package P03_Arrays;

import java.util.Arrays;
import java.util.Scanner;

public class ArrayModifier {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int[] intArray = Arrays
                .stream(scanner.nextLine().split(" "))
                .mapToInt(Integer::parseInt)
                .toArray();

        while (scanner.hasNextLine()) {
            String input = scanner.nextLine();
            if (input.equals("end")) {
                break;
            }

            String[] array = input.split(" ");
            String command = array[0];

            if (command.equals("swap")) {
                int index1 = Integer.parseInt(array[1]);
                int index2 = Integer.parseInt(array[2]);

                int numWaiting = intArray[index1];
                intArray[index1] = intArray[index2];
                intArray[index2] = numWaiting;

            } else if (command.equals("multiply")) {
                int index1 = Integer.parseInt(array[1]);
                int index2 = Integer.parseInt(array[2]);

                int multiply = intArray[index1] * intArray[index2];
                intArray[index1] = multiply;

            } else if (command.equals("decrease")) {
                for (int i = 0; i <= intArray.length - 1; i++) {
                    intArray[i]--;
                }
            }
        }

        // Convert int[] to String[]. Now 'stringArray' is an array of strings.
        String[] stringArray = Arrays
                .stream(intArray)
                .mapToObj(Integer::toString)
                .toArray(String[]::new);

        // You can do further operations or print the array if needed.
        System.out.println(String.join(", ", stringArray));
    }
}

// 100/100