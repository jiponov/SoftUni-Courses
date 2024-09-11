package P09_PrepExams.PE_07_04_01_OffroadChallenge;
// 87/100

import java.util.Scanner;
import java.util.*;
import java.util.stream.Collectors;

public class OffroadChallenge_01 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String initialFuel = scanner.nextLine();
        String additionalConsumptionIndex = scanner.nextLine();
        String neededQuantity = scanner.nextLine();

        ArrayDeque<Integer> stackOurFuel = new ArrayDeque<>();
        ArrayDeque<Integer> queueAdditionalIndex = new ArrayDeque<>();
        ArrayDeque<Integer> queueNeededQuantity = new ArrayDeque<>();

        List<String> listAltitudes = new ArrayList<>();

        String[] splitted = initialFuel.split("\\s+");
        for (String s : splitted) {
            int element = Integer.valueOf(s);
            stackOurFuel.push(element);
        }

        Arrays
                .stream(additionalConsumptionIndex.split("\\s+"))
                .map(Integer::parseInt)
                .forEach(queueAdditionalIndex::offer);

        Arrays
                .stream(neededQuantity.split("\\s+"))
                .map(Integer::parseInt)
                .forEach(queueNeededQuantity::offer);

        int top = 4;
        int counter = 0;
        boolean notReachedAnyAltitude = false;


        while (!stackOurFuel.isEmpty() && !queueAdditionalIndex.isEmpty() && !queueNeededQuantity.isEmpty()) {    // top >0
            top--;

            int fuel = stackOurFuel.peek();
            int index = queueAdditionalIndex.peek();
            int needed = queueNeededQuantity.peek();

            int result = fuel - index;

            if (result >= needed) {
                stackOurFuel.pop();
                queueAdditionalIndex.poll();
                queueNeededQuantity.poll();
                counter++;
                String newAltitude = "Altitude " + counter;
                listAltitudes.add(newAltitude);
                System.out.printf("John has reached: Altitude %d\n", counter);

            } else {

                if (counter == 0) {
                    notReachedAnyAltitude = true;
                }

                System.out.printf("John did not reach: Altitude %d\n", counter + 1);
                break;
            }
        }

        if (top > 0 && !notReachedAnyAltitude) {
            System.out.println("John failed to reach the top.");
            System.out.print("Reached altitudes: ");

            String listOutput = listAltitudes
                    .stream()
                    .collect(Collectors.joining(", "));

            System.out.print(listOutput);
            System.out.println();
        }

        if (top > 0 && notReachedAnyAltitude) {
            System.out.println("John failed to reach the top.");
            System.out.println("John didn't reach any altitude.");
        }

        if (top == 0) {
            System.out.print("John has reached all the altitudes and managed to reach the top!\n");
        }
    }
}

// вариант 2
/*

String result = "";
            for (int i = 1; i <= counter; i++) {
                if (i == counter) {
                    result += " Altitude" + " " + i;
                    break;
                }

                result += " Altitude" + " " + i + ",";
            }

*/