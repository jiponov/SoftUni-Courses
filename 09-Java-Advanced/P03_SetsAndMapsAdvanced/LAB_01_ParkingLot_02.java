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

public class LAB_01_ParkingLot_02 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // SET  -  LinkedHashSet, contains
        Set<String> set = new LinkedHashSet<>();

        String input = scanner.nextLine();
        while (!"END".equals(input)) {
            String registration = input.split("\\s+")[1];

            if (input.contains("IN")) {
                set.add(registration);
            } else {
                set.remove(registration);
            }

            input = scanner.nextLine();
        }

        if (set.isEmpty()) {
            System.out.println("Parking Lot is Empty");
            return;
        }

        for (String registration : set) {
            System.out.println(registration);
        }
    }
}
