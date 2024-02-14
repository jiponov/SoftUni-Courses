package P06_PREP_MID_EXAM;
// 100/100

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class E_06_03_ManOWar_01 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // 1-st line
        List<Integer> pirateShip = Arrays
                .stream(scanner.nextLine().split(">"))
                .map(Integer::parseInt)
                .collect(Collectors.toList());
        // 2-nd line
        List<Integer> warShip = Arrays
                .stream(scanner.nextLine().split(">"))
                .map(Integer::parseInt)
                .collect(Collectors.toList());
        // 3-rd line
        int sectionCapacityHealth = Integer.parseInt(scanner.nextLine());

        // On the following lines, until "Retire"
        while (scanner.hasNextLine()) {
            String input = scanner.nextLine();

            List<String> stringsList = Arrays
                    .stream(input.split(" "))
                    .collect(Collectors.toList());

            String command = stringsList.get(0);

            if (command.equals("Retire")) {
                break;
            }

            if (command.equals("Fire")) {
                int index = Integer.parseInt(stringsList.get(1));
                int damage = Integer.parseInt(stringsList.get(2));
                boolean isIndexValid = validateIndex(warShip, index);

                if (isIndexValid) {
                    int attackedElement = warShip.get(index);
                    warShip.set(index, attackedElement - damage);
                    attackedElement = warShip.get(index);
                    if (attackedElement <= 0) {
                        System.out.println("You won! The enemy ship has sunken.");
                        return;
                    }
                }

            } else if (command.equals("Defend")) {
                int indexStart = Integer.parseInt(stringsList.get(1));
                int indexEnd = Integer.parseInt(stringsList.get(2));
                int damage = Integer.parseInt(stringsList.get(3));
                boolean isIndexStartValid = validateIndex(pirateShip, indexStart);
                boolean isIndexEndValid = validateIndex(pirateShip, indexEnd);

                if (isIndexStartValid && isIndexEndValid) {
                    pirateShip.subList(indexStart, indexEnd + 1).replaceAll(x -> x - damage);
                    if (pirateShip.stream().anyMatch(x -> x <= 0)) {
                        System.out.println("You lost! The pirate ship has sunken.");
                        return;
                    }
                }

            } else if (command.equals("Repair")) {
                int index = Integer.parseInt(stringsList.get(1));
                int health = Integer.parseInt(stringsList.get(2));
                boolean isIndexValid = validateIndex(pirateShip, index);

                if (isIndexValid) {
                    int repairedElement = pirateShip.get(index);
                    pirateShip.set(index, repairedElement + health);
                    repairedElement = pirateShip.get(index);
                    if (repairedElement > sectionCapacityHealth) {
                        repairedElement = sectionCapacityHealth;
                        pirateShip.set(index, repairedElement);
                    }
                }

            } else if (command.equals("Status")) {
                int repairSections = 0;

                for (int section : pirateShip) {
                    double criticalLevel = 0.2 * sectionCapacityHealth;
                    if (section < criticalLevel) {
                        repairSections++;
                    }
                }

                System.out.printf("%d sections need repair.\n", repairSections);
            }
        }

        int pirateShipStatus = 0;
        int warShipStatus = 0;

        for (int el : pirateShip) {
            pirateShipStatus += el;
        }

        for (int el : warShip) {
            warShipStatus += el;
        }

        if (!pirateShip.isEmpty() && !warShip.isEmpty()) {
            System.out.printf("Pirate ship status: %d\n" +
                    "Warship status: %d\n", pirateShipStatus, warShipStatus);
        }
    }


    public static boolean validateIndex(List ship, int index) {
        if (index >= 0 && index <= ship.size() - 1) {
            return true;
        }
        return false;
    }
}