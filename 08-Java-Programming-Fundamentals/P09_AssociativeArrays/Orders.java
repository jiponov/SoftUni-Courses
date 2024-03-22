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

public class Orders {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Map <String, List<Double>>   ПРОДУКТ -> {ЦЕНА, КОЛИЧЕСТВО}
        Map<String, List<Double>> map = new LinkedHashMap<>();     // OR:  with 2 MAP

        while (scanner.hasNextLine()) {
            String input = scanner.nextLine();
            if (input.equals("buy")) {
                break;
            }

            String product = input.split("\\s+")[0];
            double newPrice = Double.parseDouble(input.split(" ")[1]);
            double newQuantity = Double.parseDouble(input.split(" ")[2]);

            if (!map.containsKey(product)) {        // Map
                map.put(product, new ArrayList<>());
            }

            if (map.get(product).isEmpty()) {       // ArrayList
                map.get(product).add(0.0);
                map.get(product).add(0.0);
            }

            double currentPrice = map.get(product).get(0);      // ArrayList
            double currentQuantity = map.get(product).get(1);   // ArrayList
            double price = newPrice;
            double quantity = currentQuantity + newQuantity;

            map.get(product).set(0, price);         // ArrayList
            map.get(product).set(1, quantity);      // ArrayList
        }

        for (Map.Entry<String, List<Double>> entry : map.entrySet()) {
            System.out.printf("%s -> %.2f\n", entry.getKey(), entry.getValue().get(0) * entry.getValue().get(1));
        }
    }
}