package P03_SetsAndMapsAdvanced;
// 100/100
// SETS and MAPS

import java.util.*;
import java.util.Scanner;
import java.util.stream.Collectors;
import java.util.ArrayList;

import java.util.Map;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.TreeMap;

import java.util.Set;
import java.util.HashSet;
import java.util.TreeSet;
import java.util.LinkedHashSet;

import static java.util.Map.Entry.comparingByKey;
import static java.util.Map.Entry.comparingByValue;

public class LAB_06_ProductShop_01 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String line = scanner.nextLine();

        Map<String, LinkedHashMap<String, Double>> mapMaster = new TreeMap<>();

        while (!"Revision".equals(line)) {
            String[] tokens = line.split(", ");

            String shop = tokens[0];
            String product = tokens[1];
            double price = Double.parseDouble(tokens[2]);

            // OR:  map.putIfAbsent(shop, new LinkedHashMap<>());
            if (!mapMaster.containsKey(shop)) {
                mapMaster.put(shop, new LinkedHashMap<>());
            }

            LinkedHashMap<String, Double> mapSlave = mapMaster.get(shop);
            // OR:  innerMap.putIfAbsent(product, price);
            if (!mapSlave.containsKey(product)) {
                mapSlave.put(product, price);
            }

            line = scanner.nextLine();
        }


        for (Map.Entry<String, LinkedHashMap<String, Double>> entryMaster : mapMaster.entrySet()) {
            System.out.println(entryMaster.getKey() + "->");

            LinkedHashMap<String, Double> mapSlave = entryMaster.getValue();

            for (Map.Entry<String, Double> entrySlave : mapSlave.entrySet()) {
                System.out.printf("Product: %s, Price: %.1f\n", entrySlave.getKey(), entrySlave.getValue());
            }
        }
    }
}