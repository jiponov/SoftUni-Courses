package P09_PrepExams.PE_04_19_01_Bouquets;
// 100/100

import java.util.Scanner;
import java.util.*;

public class Bouquets_01 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String tulipsInput = scanner.nextLine();
        String daffodilsInput = scanner.nextLine();

        ArrayDeque<Integer> stackTulips = new ArrayDeque<>();
        ArrayDeque<Integer> queueDaffodils = new ArrayDeque<>();

        Arrays
                .stream(tulipsInput.split(",\\s+"))
                .map(Integer::parseInt)
                .forEach(stackTulips::push);    // за СТЕК е PUSH

        Arrays
                .stream(daffodilsInput.split(",\\s+"))
                .map(Integer::parseInt)
                .forEach(queueDaffodils::offer);    // за ОПАШКА е OFFER


        int bouquets = 0;
        int leftFlowers = 0;

        while (!stackTulips.isEmpty() && !queueDaffodils.isEmpty()) {
            int tulips = stackTulips.peek();
            int daffodils = queueDaffodils.peek();

            int sumFlowers = tulips + daffodils;

            if (sumFlowers == 15) {
                bouquets++;
                stackTulips.pop();
                queueDaffodils.poll();
            } else if (sumFlowers > 15) {
                stackTulips.pop();
                stackTulips.push(tulips - 2);
            } else if (sumFlowers < 15) {
                leftFlowers += sumFlowers;
                stackTulips.pop();
                queueDaffodils.poll();
            }
        }


        int addExtraBouquets = leftFlowers / 15;    //  int / int -> дава int надолу обаче закръгля
        bouquets += addExtraBouquets;

        if (bouquets >= 5) {
            System.out.printf("You made it! You go to the competition with %d bouquets!", bouquets);
        } else {
            System.out.printf("You failed... You need more %d bouquets.", 5 - bouquets);
        }

    }
}