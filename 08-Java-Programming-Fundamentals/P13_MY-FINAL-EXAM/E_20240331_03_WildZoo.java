package P13_MY_FINAL_EXAM;

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

public class E_20240331_03_WildZoo {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // String Animal, Integer Food
        Map<String, Integer> animalFood = new LinkedHashMap<>();
        // String Animal, String Area
        Map<String, String> animalArea = new LinkedHashMap<>();
        // String Area, List Names Animals
        Map<String, List<String>> trackAnimalsLiving = new LinkedHashMap<>();

        String line = scanner.nextLine();
        while (!line.equals("EndDay")) {
            String command = line.split(": ")[0];
            String input = line.split(": ")[1];

            if (command.equals("Add")) {
                String name = input.split("-")[0];
                int newQuantity = Integer.parseInt(input.split("-")[1]);
                String area = input.split("-")[2];

                if (!animalFood.containsKey(name)) {
                    animalFood.put(name, 0);
                    animalArea.put(name, area);
                }

                int getQuantity = animalFood.get(name);
                getQuantity += newQuantity;
                animalFood.put(name, getQuantity);

                if (!trackAnimalsLiving.containsKey(area)) {
                    trackAnimalsLiving.put(area, new ArrayList<>());
                }

                if (!trackAnimalsLiving.get(area).contains(name)) {
                    trackAnimalsLiving.get(area).add(name);
                }

            } else if (command.equals("Feed")) {
                String name = input.split("-")[0];
                int reduceQuantity = Integer.parseInt(input.split("-")[1]);

                if (animalFood.containsKey(name)) {
                    int getQuantity = animalFood.get(name);
                    getQuantity -= reduceQuantity;

                    String area = animalArea.get(name);
                    if (getQuantity <= 0) {
                        animalFood.remove(name);
                        animalArea.remove(name);
                        trackAnimalsLiving.get(area).remove(String.valueOf(name));

                        System.out.printf("%s was successfully fed\n", name);

                        line = scanner.nextLine();
                        continue;
                    }

                    animalFood.put(name, getQuantity);
                }
            }

            line = scanner.nextLine();
        }

        System.out.println("Animals:");
        for (Map.Entry<String, Integer> entry : animalFood.entrySet()) {
            System.out.printf(" %s -> %dg\n", entry.getKey(), entry.getValue());
        }

        System.out.println("Areas with hungry animals:");
        for (Map.Entry<String, List<String>> entry : trackAnimalsLiving.entrySet()) {
            int areaSize = entry.getValue().size();

            if (areaSize > 0) {
                System.out.printf(" %s: %d\n", entry.getKey(), areaSize);
            }
        }
    }
}