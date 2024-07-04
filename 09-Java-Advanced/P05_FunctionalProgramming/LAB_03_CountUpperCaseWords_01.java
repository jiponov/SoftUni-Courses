package P05_FunctionalProgramming;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.function.Consumer;
import java.util.function.Predicate;
import java.util.stream.Collectors;

public class LAB_03_CountUpperCaseWords_01 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // 1. входни данни
        String input = scanner.nextLine();
        // лист със всички думи в текста
        List<String> words = Arrays
                .stream(input.split("\\s+"))
                .collect(Collectors.toList());

        // дума -> true (ако започва с главна буква) / false (ако не започва с главна буква)
        Predicate<String> isUppercase = word -> Character.isUpperCase(word.charAt(0));
        words = words
                .stream()
                .filter(isUppercase)
                .collect(Collectors.toList());

        // words -> имаме само думи, които започват с главна буква
        System.out.println(words.size());
        System.out.println(String.join("\n", words));
    }
}