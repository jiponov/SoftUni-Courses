package P10_TextProcessing;

import java.util.Scanner;

public class ReplaceRepeatingChars {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String line = scanner.nextLine();

        String result = "";
        // char nullChar = '\0';   Represents the null character
        char currentLetter = '\0';

        for (int i = 0; i < line.length(); i++) {
            char c = line.charAt(i);
            if (c != currentLetter) {
                result += c;
                currentLetter = c;
            }
        }

        System.out.println(result);
    }
}
// 100/100


// INPUT:
// aaaaabbbbbcdddeeeedssaa
// OUTPUT:
// abcdedsa