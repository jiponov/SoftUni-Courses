package P12_PREP_FINAL_EXAM;
// 100/100
// MAPS

import java.util.*;
import java.util.Scanner;
import java.util.ArrayList;
import java.util.Map;
import java.util.LinkedHashMap;

public class E_02_03_PlantDiscovery_01 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        Map<String, Integer> plantRarity = new LinkedHashMap<>();
        Map<String, List<Double>> plantRatings = new LinkedHashMap<>();
        int n = Integer.parseInt(scanner.nextLine());

        for (int i = 0; i < n; i++) {
            String line = scanner.nextLine();

            String plant = line.split("<->")[0];
            int rarity = Integer.parseInt(line.split("<->")[1]);

            plantRarity.put(plant, rarity);
            plantRatings.put(plant, new ArrayList<>());
        }

        String input = scanner.nextLine();
        while (!input.equals("Exhibition")) {
            String command = input.split(": ")[0];

            if (command.equals("Rate")) {
                String token = input.split(": ")[1];
                String plant = token.split(" - ")[0];
                double newRating = Double.parseDouble(token.split(" - ")[1]);

                if (!plantRatings.containsKey(plant)) {
                    System.out.println("error");
                    input = scanner.nextLine();
                    continue;
                }

                plantRatings.get(plant).add(newRating);

            } else if (command.equals("Update")) {
                String token = input.split(": ")[1];
                String plant = token.split(" - ")[0];
                int newRarity = Integer.parseInt(token.split(" - ")[1]);

                if (!plantRatings.containsKey(plant)) {
                    System.out.println("error");
                    input = scanner.nextLine();
                    continue;
                }

                plantRarity.put(plant, newRarity);

            } else if (command.equals("Reset")) {
                String plant = input.split(": ")[1];
                if (!plantRatings.containsKey(plant)) {
                    System.out.println("error");
                    input = scanner.nextLine();
                    continue;
                }

                plantRatings.get(plant).clear();
            }

            input = scanner.nextLine();
        }


        System.out.println("Plants for the exhibition:");
        for (Map.Entry<String, Integer> entry : plantRarity.entrySet()) {
            String plant = entry.getKey();
            int rarity = entry.getValue();
            List<Double> ratings = plantRatings.get(plant);

            double avgRating = 0.0;
            if (ratings.isEmpty()) {
                avgRating = 0.00;
            } else {
                for (double rating : ratings) {
                    avgRating += rating;
                }
                avgRating = avgRating / ratings.size();
            }

            System.out.printf("- %s; Rarity: %d; Rating: %.2f\n", plant, rarity, avgRating);
        }
    }
}