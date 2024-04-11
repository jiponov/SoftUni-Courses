package P10_TextProcessing;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class DigitsLettersAndOther2 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String str = scanner.nextLine(); //"Agd#53Dfg^&4F53"

        StringBuilder digits = new StringBuilder();    // цифри
        StringBuilder letters = new StringBuilder();   // букви
        StringBuilder others = new StringBuilder();    // други символи

        for (char symbol : str.toCharArray()) {
            if (Character.isDigit(symbol)) {
                digits.append(symbol);
            } else if (Character.isLetter(symbol)) {
                letters.append(symbol);
            } else {   //символът ми е друг (различен от буква или цифра)
                others.append(symbol);
            }
        }

        System.out.println(digits.toString());
        System.out.println(letters.toString());
        System.out.println(others.toString());
    }
}
// 100/100
// StringBuilder