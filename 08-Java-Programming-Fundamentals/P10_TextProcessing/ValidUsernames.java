package P10_TextProcessing;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class ValidUsernames {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        List<String> result = new ArrayList<>();
        String[] usernames = scanner.nextLine().split(", ");

        for (String str : usernames) {
            int count = str.length();
            if (count <= 2 || count >= 17) {
                continue;   // Skips to the next iteration of the outer loop
            }

            boolean isPassedSymbolCheck = true;
            char[] charArray = str.toCharArray();
            for (char c : charArray) {
                if (!Character.isDigit(c) && !Character.isLetter(c) && c != '-' && c != '_') {
                    isPassedSymbolCheck = false;
                    break;   // Terminates the inner loop immediately
                }
            }

            if (isPassedSymbolCheck) {
                result.add(str);
            }
        }

        System.out.println(String.join("\n", result));
    }
}
// 100/100