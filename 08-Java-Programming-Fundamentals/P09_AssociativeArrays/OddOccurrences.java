package P09_AssociativeArrays;
// 100/100

import java.util.*;
import java.util.Scanner;
import java.util.stream.Collectors;

public class OddOccurrences {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        List<String> sequence = Arrays
                .stream(scanner.nextLine().split(" "))
                .map(x -> x.toLowerCase())
                .collect(Collectors.toList());

        Map<String, Integer> map = new LinkedHashMap<>();

        for (String word : sequence) {
            map.putIfAbsent(word, 0);
            int occurrences = map.get(word);
            occurrences++;
            map.put(word, occurrences);
        }

        List<String> output = new ArrayList<>();

        for (Map.Entry<String, Integer> pair : map.entrySet()) {

            String currentKey = pair.getKey();
            Integer currentValue = pair.getValue();

            if (currentValue % 2 != 0) {
                output.add(currentKey);
            }
        }

        String res = String.join(", ", output);

        System.out.println(res);
        // OR:  System.out.println(String.join(", ", res));
    }
}