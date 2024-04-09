package P14_MY_FINAL_RETAKE_EXAM;
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

public class E_20240408_03_Shopping {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // MAP: STRING store, LIST STRING products
        Map<String, List<String>> stores = new LinkedHashMap<>();
        // LIST STRING: major products
        List<String> majorProducts = new ArrayList<>();

        String line = scanner.nextLine();
        while (!line.equals("Go Shopping")) {
            String command = line.split("->")[0];
            String store = line.split("->")[1];

            if (command.equals("Add")) {
                String parts = line.split("->")[2];
                List<String> items = Arrays
                        .stream(parts.split(","))
                        .collect(Collectors.toList());

                if (!stores.containsKey(store)) {
                    stores.put(store, new ArrayList<>());
                }

                for (String item : items) {

                    boolean isIncludedAlready = false;
                    for (Map.Entry<String, List<String>> entry : stores.entrySet()) {
                        String getKeyStore = entry.getKey();
                        List<String> getValuesItems = entry.getValue();
                        if (getValuesItems.contains(item)) {
                            isIncludedAlready = true;
                            break;
                        }
                    }

                    if (!isIncludedAlready) {
                        stores.get(store).add(item);
                    }
                }


            } else if (command.equals("Important")) {
                String majorItem = line.split("->")[2];

                if (!stores.containsKey(store)) {
                    stores.put(store, new ArrayList<>());
                }

                boolean isIncludedAlready = false;
                for (Map.Entry<String, List<String>> entry : stores.entrySet()) {
                    String getKeyStore = entry.getKey();
                    List<String> getValuesItems = entry.getValue();
                    if (getValuesItems.contains(majorItem)) {
                        isIncludedAlready = true;
                        break;
                    }
                }

                if (!isIncludedAlready) {
                    stores.get(store).add(0, majorItem);
                    majorProducts.add(majorItem);
                }


            } else if (command.equals("Remove")) {
                if (stores.containsKey(store)) {
                    List<String> items = stores.get(store);
                    boolean isMajorItemExistInStore = false;
                    for (String item : items) {
                        if (majorProducts.contains(item)) {
                            isMajorItemExistInStore = true;
                            break;
                        }
                    }

                    if (!isMajorItemExistInStore) {
                        stores.remove(store);
                    }
                }
            }

            line = scanner.nextLine();
        }

        for (Map.Entry<String, List<String>> entry : stores.entrySet()) {
            String getKeyStore = entry.getKey();
            List<String> getValuesItems = entry.getValue();

            System.out.printf("%s:\n", getKeyStore);
            for (String item : getValuesItems) {
                System.out.printf(" - %s\n", item);
            }
        }
    }
}