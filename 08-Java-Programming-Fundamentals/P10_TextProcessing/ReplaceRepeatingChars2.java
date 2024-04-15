package P10_TextProcessing;

import java.util.Scanner;

public class ReplaceRepeatingChars2 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String input = scanner.nextLine();
        StringBuilder sb = new StringBuilder(input);

        for (int index = 0; index < sb.length() - 1; index++) {
            if (sb.charAt(index) == sb.charAt(index + 1)) {
                sb.deleteCharAt(index + 1);
                index--;
            }
        }

        System.out.println(sb);
    }
}
// 100/100
