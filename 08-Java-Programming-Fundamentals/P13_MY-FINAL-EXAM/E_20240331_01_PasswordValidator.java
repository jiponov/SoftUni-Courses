package P13_MY_FINAL_EXAM;
// 100/100
// STRING

import java.util.Scanner;
import java.util.regex.Pattern;

public class E_20240331_01_PasswordValidator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String password = scanner.nextLine();

        String input = scanner.nextLine();
        while (!input.equals("Complete")) {
            String command = input.split(" ")[0];
            if (command.equals("Make")) {
                String command1 = input.split(" ")[0];
                String command2 = input.split(" ")[1];
                command = command1 + " " + command2;
            }

            if (command.equals("Make Upper")) {
                int index = Integer.parseInt(input.split(" ")[2]);

                boolean isIndexValid = validateIndex(index, password);
                if (!isIndexValid) {
                    input = scanner.nextLine();
                    continue;
                }

                String letter = password.charAt(index) + "";
                letter = letter.toUpperCase();
                String start = password.substring(0, index);
                String end = password.substring(index + 1);
                password = start + letter + end;

                System.out.printf("%s\n", password);

            } else if (command.equals("Make Lower")) {
                int index = Integer.parseInt(input.split(" ")[2]);

                boolean isIndexValid = validateIndex(index, password);
                if (!isIndexValid) {
                    input = scanner.nextLine();
                    continue;
                }

                String letter = password.charAt(index) + "";
                letter = letter.toLowerCase();
                String start = password.substring(0, index);
                String end = password.substring(index + 1);
                password = start + letter + end;

                System.out.printf("%s\n", password);

            } else if (command.equals("Insert")) {
                int index = Integer.parseInt(input.split(" ")[1]);
                String symbol = input.split(" ")[2];

                boolean isIndexValid = validateIndex(index, password);
                if (!isIndexValid) {
                    input = scanner.nextLine();
                    continue;
                }

                String start = password.substring(0, index);
                String end = password.substring(index);
                password = start + symbol + end;

                System.out.printf("%s\n", password);

            } else if (command.equals("Replace")) {
                char symbol = input.split(" ")[1].charAt(0);
                int value = Integer.parseInt(input.split(" ")[2]);

                int symbolAsAsciiInt = (int) symbol;
                int sumValues = symbolAsAsciiInt + value;
                char replacedSymbol = (char) sumValues;
                String replacedSymbolAsString = String.valueOf(replacedSymbol);   // OR: replacedSymbol + ""; Convert char to String
                String symbolAsString = String.valueOf(symbol);

                // ESCAPED SPECIAL CHARACTERS in String
                String escapedGivenNewSymbol = Pattern.quote(replacedSymbolAsString);
                while (password.contains(symbolAsString)) {
                    password = password.replace(symbolAsString, replacedSymbolAsString);   // ALL OCCURRENCES
                }

                System.out.printf("%s\n", password);

            } else if (command.equals("Validation")) {
                if (password.length() < 8) {
                    System.out.println("Password must be at least 8 characters long!");
                }

                boolean haveAll = true;
                for (int i = 0; i < password.length(); i++) {
                    char letter = password.charAt(i);
                    if (!Character.isDigit(letter) && !Character.isLetter(letter) && letter != '_') {
                        haveAll = false;
                        break;
                    }
                }
                if (haveAll == false) {
                    System.out.println("Password must consist only of letters, digits and _!");
                }

                boolean haveUpperCase = false;
                for (int i = 0; i < password.length(); i++) {
                    char letter = password.charAt(i);
                    if (Character.isUpperCase(letter)) {
                        haveUpperCase = true;
                    }
                }
                if (haveUpperCase == false) {
                    System.out.println("Password must consist at least one uppercase letter!");
                }

                boolean haveLowerCase = false;
                for (int i = 0; i < password.length(); i++) {
                    char letter = password.charAt(i);
                    if (Character.isLowerCase(letter)) {
                        haveLowerCase = true;
                    }
                }
                if (haveLowerCase == false) {
                    System.out.println("Password must consist at least one lowercase letter!");
                }

                boolean haveDigit = false;
                for (int i = 0; i < password.length(); i++) {
                    char letter = password.charAt(i);
                    if (Character.isDigit(letter)) {
                        haveDigit = true;
                    }
                }
                if (haveDigit == false) {
                    System.out.println("Password must consist at least one digit!");
                }
            }

            input = scanner.nextLine();
        }
    }

    private static boolean validateIndex(int index, String password) {
        if (index >= 0 && index <= password.length() - 1) {
            return true;
        }
        return false;
    }
}