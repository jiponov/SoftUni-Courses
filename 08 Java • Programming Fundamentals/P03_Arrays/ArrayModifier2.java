package P03_Arrays;

import java.util.Arrays;
import java.util.Scanner;

public class ArrayModifier2 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int[] intArray = Arrays
                .stream(scanner.nextLine().split(" "))
                .mapToInt(Integer::parseInt)
                .toArray();

        String command = scanner.nextLine();

        while (!command.equals("end")) {
            if (command.contains("swap")) {
                int index1 = Integer.parseInt(command.split(" ")[1]);
                int index2 = Integer.parseInt(command.split(" ")[2]);

                int numIndex1 = intArray[index1];
                int numIndex2 = intArray[index2];

                intArray[index1] = numIndex2;
                intArray[index2] = numIndex1;

            } else if (command.contains("multiply")) {
                int index1 = Integer.parseInt(command.split(" ")[1]);
                int index2 = Integer.parseInt(command.split(" ")[2]);

                int numIndex1 = intArray[index1];
                int numIndex2 = intArray[index2];

                int product = numIndex1 * numIndex2;

                intArray[index1] = product;

            } else {
                for (int position = 0; position <= intArray.length - 1; position++) {
                    intArray[position]--;
                }
            }

            command = scanner.nextLine();
        }

        System.out.println(Arrays
                .toString(intArray)
                .replace("[", "")
                .replace("]", "")
        );
    }
}

// 100/100