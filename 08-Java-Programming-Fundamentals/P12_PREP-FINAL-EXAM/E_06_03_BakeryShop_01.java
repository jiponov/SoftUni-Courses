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

public class E_06_03_BakeryShop_01 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        Map<String, Integer> products = new LinkedHashMap<>();
        String line = scanner.nextLine();
        int trackSoldGoods = 0;

        while (!line.equals("Complete")) {
            String command = line.split(" ")[0];
            int newQuantity = Integer.parseInt(line.split(" ")[1]);

            if (command.equals("Receive")) {
                String food = line.split(" ")[2];

                if (newQuantity <= 0) {
                    line = scanner.nextLine();
                    continue;
                }

                if (!products.containsKey(food)) {
                    products.put(food, 0);
                }

                int getQuantity = products.get(food);
                getQuantity += newQuantity;
                products.put(food, getQuantity);


            } else if (command.equals("Sell")) {
                String food = line.split(" ")[2];

                if (!products.containsKey(food)) {
                    System.out.printf("You do not have any %s.\n", food);

                    line = scanner.nextLine();
                    continue;
                }

                int getQuantity = products.get(food);
                if (getQuantity < newQuantity) {
                    System.out.printf("There aren't enough %s. You sold the last %s of them.\n", food, getQuantity);
                    products.remove(food);

                    trackSoldGoods += getQuantity;
                    line = scanner.nextLine();
                    continue;
                }

                getQuantity -= newQuantity;
                products.put(food, getQuantity);
                System.out.printf("You sold %d %s.\n", newQuantity, food);
                trackSoldGoods += newQuantity;

                if (products.get(food) == 0) {      // products.get(food)  ==  getQuantity
                    products.remove(food);
                }
            }


            line = scanner.nextLine();
        }


        for (Map.Entry<String, Integer> entry : products.entrySet()) {
            System.out.printf("%s: %d\n", entry.getKey(), entry.getValue());
        }

        System.out.printf("All sold: %d goods\n", trackSoldGoods);
    }
}