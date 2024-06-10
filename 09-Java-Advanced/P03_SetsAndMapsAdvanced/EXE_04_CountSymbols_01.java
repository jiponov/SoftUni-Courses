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

public class EXE_04_CountSymbols_01 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        TreeMap<Character, Integer> symbolsCount = new TreeMap<>();
        // символ -> бр. срещанията

        String text = scanner.nextLine();
        for (int i = 0; i < text.length(); i++) {
            char currentSymbol = text.charAt(i);

            // символът вече да съм го срещала
            if (symbolsCount.containsKey(currentSymbol)) {
                int currentCount = symbolsCount.get(currentSymbol);
                symbolsCount.put(currentSymbol, currentCount + 1);
            } else {   // символът да не съм го срещала
                symbolsCount.put(currentSymbol, 1);
            }
        }

        // символ: бр.срещания time/s
        symbolsCount
                .entrySet()
                .forEach(entry -> System.out.println(entry.getKey() + ": " + entry.getValue() + " time/s"));
    }
}