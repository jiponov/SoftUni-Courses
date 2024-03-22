package P09_AssociativeArrays;

// 100/100

import java.util.*;
import java.util.Scanner;

import java.util.stream.Collectors;
import java.util.ArrayList;
import java.util.Map;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.TreeMap;

public class Orders2 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        Map<String, Double> mapPrice = new LinkedHashMap<>();
        Map<String, Integer> mapQuantity = new LinkedHashMap<>();

        while (scanner.hasNextLine()) {
            String input = scanner.nextLine();
            if (input.equals("buy")) {
                break;
            }

            String product = input.split("\\s+")[0];
            double newPrice = Double.parseDouble(input.split(" ")[1]);
            int newQuantity = Integer.parseInt(input.split(" ")[2]);

            if (!mapQuantity.containsKey(product)) {
                mapQuantity.put(product, newQuantity);
            } else {
                int currentQuantity = mapQuantity.get(product);
                mapQuantity.put(product, currentQuantity + newQuantity);
            }

            mapPrice.put(product, newPrice);
        }

        for (Map.Entry<String, Integer> entry : mapQuantity.entrySet()) {
            String productName = entry.getKey();
            double totalSum = mapQuantity.get(productName) * mapPrice.get(productName);
            System.out.printf("%s -> %.2f\n", productName, totalSum);
        }
    }
}