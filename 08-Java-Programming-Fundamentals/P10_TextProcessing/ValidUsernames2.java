package P10_TextProcessing;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class ValidUsernames2 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String[] usernames = scanner.nextLine()   // "sh, too_long_username, !lleg@l ch@rs, jeffbutt"
                .split(", ");               // ["sh", "too_long_username", "!lleg@l ch@rs", "jeffbutt"]

        for (String username : usernames) {
            // проверка дали е валидно -> print
            if (isValidUsername(username)) {
                System.out.println(username);
            }
        }
    }

    public static boolean isValidUsername(String username) {
        // 1. валидна дължина [3; 16]
        if (username.length() < 3 || username.length() > 16) {
            return false;   // невалидна дължина -> невалиден username
        }

        // 2. валидно съдържание -> букви, цифри, -, _
        // username = "TestUser".toCharArray() -> ['T', 'e', 's', 't', 'U', 's', 'e', 'r']
        for (int i = 0; i <= username.length() - 1; i++) {
            char symbol = username.charAt(i);
            if (!Character.isLetterOrDigit(symbol) && symbol != '-' && symbol != '_') {
                return false;     // невалиден символ -> невалиден username
            }
        }

        return true;     // валидно съдържание и валидна дължина -> валиден username
    }
}
// 100/100