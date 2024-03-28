package P12_PREP_FINAL_EXAM;
// 100/100
// MAPS

import java.util.*;
import java.util.Scanner;
import java.util.stream.Collectors;
import java.util.ArrayList;
import java.util.Map;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.TreeMap;

public class E_05_03_Pirates_01 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        Map<String, List<Integer>> cities = new LinkedHashMap<>();

        String line = scanner.nextLine();
        while (!line.equals("Sail")) {
            String city = line.split("\\|\\|")[0];
            int people = Integer.parseInt(line.split("\\|\\|")[1]);
            int gold = Integer.parseInt(line.split("\\|\\|")[2]);

            if (!cities.containsKey(city)) {
                cities.put(city, new ArrayList<>());
                cities.get(city).add(people);
                cities.get(city).add(gold);
            } else {
                int getPeople = cities.get(city).get(0);
                getPeople += people;
                cities.get(city).set(0, getPeople);
                int getGold = cities.get(city).get(1);
                getGold += gold;
                cities.get(city).set(1, getGold);
            }

            line = scanner.nextLine();
        }


        String events = scanner.nextLine();
        while (!events.equals("End")) {
            String command = events.split("=>")[0];
            String city = events.split("=>")[1];

            if (command.equals("Plunder")) {
                int killPeople = Integer.parseInt(events.split("=>")[2]);
                int stealGold = Integer.parseInt(events.split("=>")[3]);

                List<Integer> cityInfo = cities.get(city);

                if (cityInfo != null && cityInfo.size() == 2) {
                    int getPeople = cities.get(city).get(0);
                    int getGold = cities.get(city).get(1);
                    int leftPeople = getPeople - killPeople;
                    int leftGold = getGold - stealGold;

                    if (leftPeople <= 0 || leftGold <= 0) {
                        cities.remove(city);

                        System.out.printf("%s plundered! %d gold stolen, %d citizens killed.\n", city, stealGold, killPeople);
                        System.out.printf("%s has been wiped off the map!\n", city);

                        events = scanner.nextLine();
                        continue;
                    }

                    cities.get(city).set(0, leftPeople);
                    cities.get(city).set(1, leftGold);
                    System.out.printf("%s plundered! %d gold stolen, %d citizens killed.\n", city, stealGold, killPeople);
                }

            } else if (command.equals("Prosper")) {
                int addedGold = Integer.parseInt(events.split("=>")[2]);

                List<Integer> cityInfo = cities.get(city);

                if (cityInfo != null && cityInfo.size() == 2) {
                    if (addedGold >= 0) {
                        int gold = cities.get(city).get(1);
                        gold += addedGold;
                        cities.get(city).set(1, gold);
                        System.out.printf("%d gold added to the city treasury. %s now has %d gold.\n", addedGold, city, gold);
                    } else {
                        System.out.println("Gold added cannot be a negative number!");
                    }
                }
            }

            events = scanner.nextLine();
        }


        if (!cities.isEmpty()) {
            int countSettlements = cities.size();
            System.out.printf("Ahoy, Captain! There are %d wealthy settlements to go to:\n", countSettlements);

            for (Map.Entry<String, List<Integer>> entry : cities.entrySet()) {
                System.out.printf("%s -> Population: %d citizens, Gold: %d kg\n", entry.getKey(), entry.getValue().get(0), entry.getValue().get(1));
            }

            return;
        }

        System.out.println("Ahoy, Captain! All targets have been plundered and destroyed!");
    }
}