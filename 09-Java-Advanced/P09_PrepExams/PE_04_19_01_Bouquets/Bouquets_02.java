package P09_PrepExams.PE_04_19_01_Bouquets;
// 100/100

import java.util.Scanner;
import java.util.*;

public class Bouquets_02 {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        String tulipsInput = scanner.nextLine();
        String daffodilsInput = scanner.nextLine();

        int goal = 5;
        int bouquets = 0;

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


        Map<String, Integer> mapStoredFlowers = new TreeMap<>();
        mapStoredFlowers.put("tulips", 0);
        mapStoredFlowers.put("daffodils", 0);


        while (!stackTulips.isEmpty() && !queueDaffodils.isEmpty()) {

            int tulips = stackTulips.peek();
            int daffodils = queueDaffodils.peek();
            int sumFlowers = tulips + daffodils;


            if (sumFlowers == 15) {
                stackTulips.pop();
                queueDaffodils.poll();
                bouquets++;

            } else if (sumFlowers > 15) {
                while (sumFlowers > 15) {
                    int getTulips = stackTulips.pop();
                    getTulips -= 2;
                    stackTulips.push(getTulips);
                    tulips = stackTulips.peek();
                    sumFlowers = tulips + daffodils;

                    if (sumFlowers == 15) {
                        stackTulips.pop();
                        queueDaffodils.poll();
                        bouquets++;
                        break;
                    }

                    if (sumFlowers < 15) {
                        mapStoredFlowers.put("tulips", mapStoredFlowers.get("tulips") + tulips);
                        mapStoredFlowers.put("daffodils", mapStoredFlowers.get("daffodils") + daffodils);
                        stackTulips.pop();
                        queueDaffodils.poll();
                        break;
                    }
                }

            } else if (sumFlowers < 15) {
                mapStoredFlowers.put("tulips", mapStoredFlowers.get("tulips") + tulips);
                mapStoredFlowers.put("daffodils", mapStoredFlowers.get("daffodils") + daffodils);
                stackTulips.pop();
                queueDaffodils.poll();
            }
        }


        int getLastTulips = mapStoredFlowers.get("tulips");
        int getLastDaffodils = mapStoredFlowers.get("daffodils");

        int sumLastFlowers = getLastTulips + getLastDaffodils;

        while (sumLastFlowers > 0) {

            if (sumLastFlowers > 15) {
                bouquets++;
                sumLastFlowers -= 15;
            }

            if (sumLastFlowers == 15) {
                bouquets++;
                break;
            }

            if (sumLastFlowers < 15) {
                break;
            }
        }


        if (bouquets >= goal) {
            System.out.printf("You made it! You go to the competition with %d bouquets!", bouquets);
        } else {
            System.out.printf("You failed... You need more %d bouquets.", goal - bouquets);
        }

    }
}
