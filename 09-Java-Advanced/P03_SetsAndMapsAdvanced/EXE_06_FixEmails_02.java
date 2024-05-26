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

public class EXE_06_FixEmails_02 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // име на човек  ->  email на човек
        Map<String, String> map = new LinkedHashMap<>();

        String name = scanner.nextLine();


        // съхраняваме данните за хората и техните имейли
        while (!"stop".equals(name)) {
            String email = scanner.nextLine();

            if (!email.endsWith("uk") && !email.endsWith("us") && !email.endsWith("com")) {
                map.put(name, email);
            }

            name = scanner.nextLine();
        }

        // print
        map
                .entrySet()
                .forEach(entry -> System.out.println(entry.getKey() + " -> " + entry.getValue()));
    }
}