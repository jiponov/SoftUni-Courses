package P04_Methods;

import java.util.Scanner;

public class PasswordValidator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String password = scanner.next();

        if (!validateCount(password)) {
            System.out.println("Password must be between 6 and 10 characters");
        }
        if (!validateLettersAndDigits(password)) {
            System.out.println("Password must consist only of letters and digits");
        }
        if (!validateTwoDigitsAtLeast(password)) {
            System.out.println("Password must have at least 2 digits");
        }

        if (validateCount(password) && validateLettersAndDigits(password) && validateTwoDigitsAtLeast(password)) {
            System.out.println("Password is valid");
        }
    }

    static boolean validateCount(String pass) {
        if (pass.length() >= 6 && pass.length() <= 10) {
            return true;
        } else {
            return false;
        }
    }

    static boolean validateLettersAndDigits(String pass) {
        for (int index = 0; index <= pass.length() - 1; index++) {
            char currentSymbol = pass.charAt(index);
            boolean isSmallLetter = currentSymbol >= 97 && currentSymbol <= 120;
            boolean isCapitalLetter = currentSymbol >= 65 && currentSymbol <= 90;
            boolean isDigit = currentSymbol >= 48 && currentSymbol <= 57;

            if (!isSmallLetter && !isCapitalLetter && !isDigit) {
                return false;
            }
        }

        return true;
    }

    static boolean validateTwoDigitsAtLeast(String pass) {
        int countDigits = 0;

        for (int index = 0; index <= pass.length() - 1; index++) {
            char currentSymbol = pass.charAt(index);
            if (Character.isDigit(currentSymbol)) {
                countDigits++;
            }
        }

        if (countDigits >= 2) {
            return true;
        }

        return false;
    }
}
//100/100