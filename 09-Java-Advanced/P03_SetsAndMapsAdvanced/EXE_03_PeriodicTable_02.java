package P03_SetsAndMapsAdvanced;
// 20/100   -   Runtime error
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

public class EXE_03_PeriodicTable_02 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        Set<String> uniqueElements = new TreeSet<>();

        // брой на редовете с химични елементи
        int n = Integer.parseInt(scanner.nextLine());

        for (int row = 1; row <= n; row++) {
            // "Mo O Ce".split("\\s+")  ->  ["Mo", "O", "Ce"]
            String[] chemicalElements = scanner.nextLine().split("\\s+");

            // начин 2: .addAll()
            Collections.addAll(Arrays.asList(chemicalElements), uniqueElements);
        }

        // set с всички хим. елементи по един път
        uniqueElements.forEach(x -> System.out.print(x + " "));
    }
}