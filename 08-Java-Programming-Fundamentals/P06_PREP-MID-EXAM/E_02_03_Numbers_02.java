package P06_PREP_MID_EXAM;

// 100/100

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class E_02_03_Numbers_02 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        List<Integer> numbers = Arrays
                .stream((scanner.nextLine().split(" ")))
                .map(Integer::parseInt)
                .collect(Collectors.toList());

        int sum = numbers
                .stream()
                .mapToInt(Integer::intValue)
                .sum();

        double averageNumber = 1.0 * sum / numbers.size();

        List<Integer> numbersGreaterThanAverage = numbers
                .stream()
                .filter(num -> num > averageNumber)
                .sorted((a, b) -> b.compareTo(a))
                .limit(5)
                .collect(Collectors.toList());

        if (numbersGreaterThanAverage.isEmpty()) {
            System.out.println("No");
        } else {
            numbersGreaterThanAverage.forEach(num -> System.out.print(num + " "));
        }
    }
}

// 100/100