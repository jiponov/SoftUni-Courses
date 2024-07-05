package P05_FunctionalProgramming;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.function.Consumer;
import java.util.function.Predicate;
import java.util.stream.Collectors;

public class LAB_03_CountUpperCaseWords_02 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // 1. входни данни
        String input = scanner.nextLine();
        // масив с всички думи в текста
        String[] text = input.split("\\s+");

        // лист със всички думи в текста
        List<String> uppercaseWords = new ArrayList<>();

        // дума -> true (ако започва с главна буква) / false (ако не започва с главна буква)
        Predicate<String> isUppercase = word -> Character.isUpperCase(word.charAt(0));

        for (String word : text) {
            if (isUppercase.test(word)) {
                // думата започва с главна буква
                uppercaseWords.add(word);
            }
        }

        // uppercaseWords -> имаме само думи, които започват с главна буква
        System.out.println(uppercaseWords.size());
        System.out.println(String.join("\n", uppercaseWords));
    }
}
