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

import static java.util.stream.Collectors.toMap;

public class EXE_02_SetsOfElements_01 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String input = scanner.nextLine(); // "4 3"

        // брой елементи в първия сет
        int sizeOfFirstSet = Integer.parseInt(input.split("\\s+")[0]);
        // брой елементи във втория сет
        int sizeOfSecondSet = Integer.parseInt(input.split("\\s+")[1]);

        Set<Integer> set1 = new LinkedHashSet<>();   // първия сет
        Set<Integer> set2 = new LinkedHashSet<>();   // втори сет

        // 1. напълни първия сет
        for (int number = 1; number <= sizeOfFirstSet; number++) {
            int value = Integer.parseInt(scanner.nextLine());
            set1.add(value);
        }

        // 2. напълни втория сет
        for (int number = 1; number <= sizeOfSecondSet; number++) {
            int value = Integer.parseInt(scanner.nextLine());
            set2.add(value);
        }

        // set 1 => {1, 3, 5, 7}
        // set 2 => {3, 4, 5}
        // общите елементи за двата сета -> {3, 5}

        // начин 1: повтарящите се елементи
        Set<Integer> duplicateElements = new LinkedHashSet<>();
        for (int e : set1) {
            if (set2.contains(e)) {
                duplicateElements.add(e);

                // OR:  System.out.print(e + " ");
            }
        }

        // duplicateElements -> всички елементи, които ги има и в двата сета
        duplicateElements.forEach(x -> System.out.print(x + " "));
    }
}