package P10_TextProcessing;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class DigitsLettersAndOther {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String str = scanner.nextLine();
        char[] charArr = str.toCharArray();

        List<Character> digits = new ArrayList<>();
        List<Character> letters = new ArrayList<>();
        List<Character> other = new ArrayList<>();

        for (char el : charArr) {
            if (Character.isDigit(el)) {
                digits.add(el);
            } else if (Character.isLetter(el)) {
                letters.add(el);
            } else if (!Character.isLetter(el) || !Character.isDigit(el)) {
                other.add(el);
            }
        }

        List<String> digitsAsString = new ArrayList<>();
        List<String> lettersAsString = new ArrayList<>();
        List<String> otherAsString = new ArrayList<>();
        for (Character el : digits) {
            digitsAsString.add(String.valueOf(el));
        }
        for (Character el : letters) {
            lettersAsString.add(String.valueOf(el));
        }
        for (Character el : other) {
            otherAsString.add(String.valueOf(el));
        }

        System.out.println(String.join("", digitsAsString));
        System.out.println(String.join("", lettersAsString));
        System.out.println(String.join("", otherAsString));
    }
}

//100/100
// Use Character.isDigit(char symbol)