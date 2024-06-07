package P03_SetsAndMapsAdvanced;

import java.util.*;
import java.util.stream.Collector;
import java.util.stream.Collectors;

public class LAB_09_Largest3Numbers_01 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String[] input = scanner.nextLine().split(" ");

        List<Integer> numbers = new ArrayList<>();

        for (String e : input) {
            numbers.add(Integer.parseInt(e));
        }

        List<Integer> sorted = numbers
                .stream()
                .sorted((a, b) -> b.compareTo(a))
                .collect(Collectors.toList());

        int limit = Math.min(sorted.size(), 3);

        for (int i = 0; i < limit; i++) {
            System.out.print(sorted.get(i) + " ");
        }
    }
}