package P09_AssociativeArrays;

// 100/100

import java.util.*;
import java.util.Scanner;

import java.util.stream.Collectors;
import java.util.ArrayList;
import java.util.Map;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.TreeMap;

public class SoftUniParking {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int n = Integer.parseInt(scanner.nextLine());
        Map<String, String> map = new LinkedHashMap<>();

        for (int i = 0; i < n; i++) {
            String input = scanner.nextLine();

            String command = input.split("\\s+")[0];
            String username = input.split("\\s+")[1];

            if (command.equals("register")) {
                String license = input.split("\\s+")[2];
                registerPlate(username, license, map);
            } else if (command.equals("unregister")) {
                unregisterPlate(username, map);
            }
        }

        for (Map.Entry<String, String> entry : map.entrySet()) {
            System.out.printf("%s => %s\n", entry.getKey(), entry.getValue());
        }

        // OR:  map.entrySet().forEach(entry -> System.out.println(entry.getKey() + " => " + entry.getValue()));
    }

    private static void registerPlate(String username, String license, Map<String, String> map) {
        if (!map.containsKey(username)) {
            map.put(username, license);
            System.out.printf("%s registered %s successfully\n", username, license);
        } else {
            System.out.printf("ERROR: already registered with plate number %s\n", license);
        }
    }

    private static void unregisterPlate(String username, Map<String, String> map) {
        if (map.containsKey(username)) {
            map.remove(username);
            System.out.printf("%s unregistered successfully\n", username);
        } else {
            System.out.printf("ERROR: user %s not found\n", username);
        }
    }
}