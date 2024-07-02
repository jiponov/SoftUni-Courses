package P05_FunctionalProgramming;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.*;

public class LAB_01_SortEvenNumbers_02 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // 1. входни данни  ->  "4, 2, 1, 3, 5, 7, 1, 4, 2, 12"
        // ["4", "2", "1", "3", "5", "7", "2", "4", "2", "12"]
        // [4, 2, 1, 3, 5, 7, 2, 4, 2, 12]
        // [4, 2, 2, 4, 2, 12]
        // {4, 2, 2, 4, 2, 12}

        List<Integer> numbers = Arrays
                .stream(scanner.nextLine().split(", "))
                .map(Integer::parseInt)
                .filter(n -> n % 2 == 0)
                .collect(Collectors.toList());

        // 2. принтирам само четните числа
        // OR:  System.out.println(String.join(", ", numbers.toString().replace("[","").replace("]","")));
        printEvenNumbers(numbers);

        // 3. сортираме в нарастващ ред
        Collections.sort(numbers);

        // 4. принтираме отново само четните числа
        // OR:  System.out.println(String.join(", ", numbers.toString().replace("[","").replace("]","")));
        printEvenNumbers(numbers);
    }

    private static void printEvenNumbers(List<Integer> numbers) {

        // {4, 2, 2, 4, 2, 12}
        List<String> numbersAsText = new ArrayList<>();

        // 4 -> "4"
        for (int number : numbers) {
            numbersAsText.add(String.valueOf(number));
        }

        // {"4", "2", "2", "4", "2", "12"}
        System.out.println(String.join(", ", numbersAsText));
    }
}
