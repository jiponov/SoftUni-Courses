package P10_TextProcessing;

import java.util.Arrays;
import java.util.List;
import java.util.Scanner;

public class TextFilter {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String bannedWords = scanner.nextLine();
        String str = scanner.nextLine();
        List<String> ban = Arrays.asList(bannedWords.split(", "));

        for (String el : ban) {
            while (str.indexOf(el) != -1) {
                int countEl = el.length();
                String replacedEl = "*".repeat(countEl);
                str = str.replace(el, replacedEl);
            }
        }

        System.out.println(str);
    }
}
//100/100