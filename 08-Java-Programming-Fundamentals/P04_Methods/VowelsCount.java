package P04_Methods;

import java.util.Scanner;

public class VowelsCount {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String word = scanner.nextLine();

        printVowels(word);
    }

    private static void printVowels(String word) {
        //a e i o u
        int vowelsSum = 0;

        for (int i = 0; i < word.length(); i++) {
            char letter = word.charAt(i);

            if (letter == 97) {
                vowelsSum++;
            } else if (letter == 101) {
                vowelsSum++;
            } else if (letter == 105) {
                vowelsSum++;
            } else if (letter == 111) {
                vowelsSum++;
            } else if (letter == 117) {
                vowelsSum++;
            } else if (letter == 65) {
                vowelsSum++;
            } else if (letter == 69) {
                vowelsSum++;
            } else if (letter == 73) {
                vowelsSum++;
            } else if (letter == 79) {
                vowelsSum++;
            } else if (letter == 85) {
                vowelsSum++;
            }
        }

        System.out.println(vowelsSum);
    }
}
// 100/100