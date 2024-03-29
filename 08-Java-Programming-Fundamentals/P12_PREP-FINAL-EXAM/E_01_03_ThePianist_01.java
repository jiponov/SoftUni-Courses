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

public class E_01_03_ThePianist_01 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        Map<String, List<String>> map = new LinkedHashMap<>();
        int n = Integer.parseInt(scanner.nextLine());

        for (int i = 0; i < n; i++) {
            String initial = scanner.nextLine();
            String piece = initial.split("\\|")[0];
            String composer = initial.split("\\|")[1];
            String key = initial.split("\\|")[2];
            map.put(piece, new ArrayList<>());
            map.get(piece).add(composer);
            map.get(piece).add(key);
        }

        String input = scanner.nextLine();
        while (!input.equals("Stop")) {
            String command = input.split("\\|")[0];
            String piece = input.split("\\|")[1];

            if (command.equals("Add")) {
                String composer = input.split("\\|")[2];
                String key = input.split("\\|")[3];

                if (!map.containsKey(piece)) {
                    map.put(piece, new ArrayList<>());
                    // map.get(piece).add(composer + ", " + key);
                    map.get(piece).add(composer);
                    map.get(piece).add(key);
                    System.out.printf("%s by %s in %s added to the collection!\n", piece, composer, key);
                } else {
                    System.out.printf("%s is already in the collection!\n", piece);
                }

            } else if (command.equals("Remove")) {
                if (map.containsKey(piece)) {
                    map.remove(piece);
                    System.out.printf("Successfully removed %s!\n", piece);
                } else {
                    System.out.printf("Invalid operation! %s does not exist in the collection.\n", piece);
                }

            } else if (command.equals("ChangeKey")) {
                String newKey = input.split("\\|")[2];

                if (map.containsKey(piece)) {
                    map.get(piece).set(1, newKey);
                    System.out.printf("Changed the key of %s to %s!\n", piece, newKey);
                } else {
                    System.out.printf("Invalid operation! %s does not exist in the collection.\n", piece);
                }
            }

            input = scanner.nextLine();
        }

        for (Map.Entry<String, List<String>> entry : map.entrySet()) {
            System.out.printf("%s -> Composer: %s, Key: %s\n", entry.getKey(), entry.getValue().get(0), entry.getValue().get(1));
        }
    }
}