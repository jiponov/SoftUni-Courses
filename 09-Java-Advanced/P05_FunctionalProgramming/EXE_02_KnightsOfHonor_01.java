package P05_FunctionalProgramming;

import java.util.Arrays;
import java.util.Scanner;
import java.util.function.Consumer;

public class EXE_02_KnightsOfHonor_01 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Function<приема, връща> -> apply
        // Consumer<приема> -> void -> accept
        // Supplier<връща> -> get
        // Predicate<приема> -> връща true / false -> test
        // BiFunction<приема1, приема2, връща> -> apply

        String input = scanner.nextLine();  // "Peter George Alex"
        String[] names = input.split("\\s+");  // ["Peter", "George", "Alex"]

        // име -> отпечатам "Sir " + име
        Consumer<String> printName = name -> System.out.println("Sir " + name);
        Arrays.stream(names).forEach(printName);

        /*
        for (String name : names) {
            printName.accept(name);
        }
        */
    }
}
