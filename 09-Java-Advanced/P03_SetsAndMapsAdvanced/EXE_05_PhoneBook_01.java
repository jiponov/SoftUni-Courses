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

public class EXE_05_PhoneBook_01 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // име на човек  ->  телефонен номер
        Map<String, String> phonebook = new HashMap<>();

        String input = scanner.nextLine();

        // 1. запълване на phonebook
        while (!"search".equals(input)) {
            // data = "John-0888080808".split("-")  ->  ["John", "0888080808"]
            String name = input.split("-")[0];
            String phoneNumber = input.split("-")[1];

            phonebook.put(name, phoneNumber);

            input = scanner.nextLine();
        }

        // 2. търсене в phonebook
        String name = scanner.nextLine();
        while (!"stop".equals(name)) {
            // ако името го има в phonebook  (име -> номер): "{name} -> {number}"
            if (phonebook.containsKey(name)) {
                String phoneNumber = phonebook.get(name);
                System.out.println(name + " -> " + phoneNumber);
            } else {   // ако името го няма в phonebook: "Contact {name} does not exist."
                System.out.printf("Contact %s does not exist.\n", name);
            }

            name = scanner.nextLine();
        }
    }
}