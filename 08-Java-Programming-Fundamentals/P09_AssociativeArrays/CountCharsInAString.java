package P09_AssociativeArrays;
// 100/100

import java.util.*;
import java.util.stream.Collectors;

import static java.util.Map.Entry.comparingByValue;

public class CountCharsInAString {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        List<String> list = new ArrayList<>();
        Map<String, Integer> map = new LinkedHashMap<>();

        list = Arrays
                .stream(scanner.nextLine().split(""))
                .map(el -> el)
                .collect(Collectors.toList());

        for (String el : list) {
            if (el.equals(" ")) {
                continue;
            }

            map.putIfAbsent(el, 0);
            int occurrences = map.get(el);
            occurrences++;
            map.put(el, occurrences);
        }

        for (Map.Entry<String, Integer> entry : map.entrySet()) {
            System.out.println(entry.getKey() + " -> " + entry.getValue());
        }
    }
}


/*

map
                .entrySet()
                .stream()
                .sorted(Collections.reverseOrder(comparingByValue()))
                .forEach(entry -> System.out.println(entry.getKey() + " -> " + entry.getValue()));

 */
