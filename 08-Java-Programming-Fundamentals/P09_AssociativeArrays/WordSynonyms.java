package P09_AssociativeArrays;

// 100/100

import java.util.*;
import java.util.Scanner;
import java.util.stream.Collectors;

public class WordSynonyms {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int nWords = Integer.parseInt(scanner.nextLine());

        Map<String, List<String>> map = new LinkedHashMap<>();

        for (int i = 0; i < nWords; i++) {
            String word = scanner.nextLine();
            String synonym = scanner.nextLine();

            // OR:  map.putIfAbsent(word, new ArrayList<>());
            if (!map.containsKey(word)) {
                map.put(word, new ArrayList<>());
            }

            map.get(word).add(synonym);
        }

        // pair:  key (String)  value (List<String>)
        for (Map.Entry<String, List<String>> pair : map.entrySet()) {
            System.out.printf("%s - %s\n", pair.getKey(), String.join(", ", pair.getValue()));
        }
    }
}

/*

OR:

String word = pair.getKey();
List<String> synonyms = pair.getValue();
System.out.println(word + " - " + String.join(", ", synonyms));

*/