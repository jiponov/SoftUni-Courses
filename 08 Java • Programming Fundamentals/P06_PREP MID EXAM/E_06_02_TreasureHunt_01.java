package P06_PREP_MID_EXAM;
// 100/100

import java.util.*;
import java.util.stream.Collectors;

public class E_06_02_TreasureHunt_01 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        List<String> treasureState = Arrays
                .stream(scanner.nextLine().split("\\|"))
                .collect(Collectors.toList());

        String input = scanner.nextLine();

        while (!input.equals("Yohoho!")) {
            List<String> lineList = Arrays
                    .stream(input.split(" "))
                    .collect(Collectors.toList());

            String command = lineList.get(0);

            if (command.equals("Loot")) {
                lineList.remove(0);
                for (int i = 0; i < lineList.size(); i++) {
                    String el = lineList.get(i);
                    if (!treasureState.contains(el)) {
                        treasureState.add(0, el);
                    }
                }

            } else if (command.equals("Drop")) {
                int index = Integer.parseInt(lineList.get(1));
                if (index >= 0 && index <= treasureState.size() - 1) {
                    String element = treasureState.get(index);
                    treasureState.remove(index);
                    treasureState.add(element);
                }

            } else if (command.equals("Steal")) {
                int count = Integer.parseInt(lineList.get(1));
                int itemsCount = Math.min(count, treasureState.size());
                int counter = 0;
                List<String> stolenList = new ArrayList<>();
                for (int i = treasureState.size() - 1; i >= 0; i--) {
                    String element = treasureState.get(i);
                    treasureState.remove(i);
                    counter++;
                    stolenList.add(element);
                    if (counter == itemsCount) {
                        break;
                    }
                }

                Collections.reverse(stolenList);
                System.out.println(String.join(", ", stolenList));
            }

            input = scanner.nextLine();
        }

        int sum = 0;
        int countItemsInList = treasureState.size();
        for (String el : treasureState) {
            int length = el.length();
            sum += length;
        }

        double avgGain = sum * 1.0 / countItemsInList;

        if (treasureState.isEmpty()) {
            System.out.println("Failed treasure hunt.");
            return;
        }

        System.out.printf("Average treasure gain: %.2f pirate credits.", avgGain);
    }
}