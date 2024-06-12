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

public class EXE_01_UniqueUsernames_01 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // брой на думите
        int n = Integer.parseInt(scanner.nextLine());
        // запазваме реда на добавяне
        Set<String> words = new LinkedHashSet<>();

        for (int i = 0; i < n; i++) {
            String word = scanner.nextLine();
            words.add(word);
        }

        words.forEach(System.out::println);
    }
}