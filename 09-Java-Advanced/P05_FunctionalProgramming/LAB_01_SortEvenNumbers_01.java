package P05_FunctionalProgramming;

import java.util.*;
import java.util.stream.Collectors;

public class LAB_01_SortEvenNumbers_01 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // 1. входни данни  ->  "4, 2, 1, 3, 5, 7, 1, 4, 2, 12"
        String input = scanner.nextLine();
        // ["4", "2", "1", "3", "5", "7", "2", "4", "2", "12"]
        String[] splittedInput = input.split(", ");

        List<Integer> numbers = new ArrayList<>();
        for (String s : splittedInput) {
            numbers.add(Integer.parseInt(s));
        }

        // 2. принтирам само четните числа
        printEvenNumbers(numbers);

        // 3. сортираме в нарастващ ред
        numbers = numbers
                .stream()
                .sorted((a, b) -> a.compareTo(b))   // OR: (Integer::compareTo)
                .collect(Collectors.toList());

        // 4. принтираме отново само четните числа
        printEvenNumbers(numbers);
    }

    private static void printEvenNumbers(List<Integer> numbers) {

        for (int i = 0; i < numbers.size(); i++) {
            int n = numbers.get(i);

            if (n % 2 == 0) {
                if (i == numbers.size() - 1) {
                    System.out.print(n);
                    System.out.println();
                    break;
                }

                System.out.print(n + ", ");
            }
        }
    }
}