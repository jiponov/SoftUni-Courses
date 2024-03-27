package P12_PREP_FINAL_EXAM;
// 100/100
// STRING

import java.util.Scanner;
import java.util.regex.Pattern;

public class E_06_01_Registration_01 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String username = scanner.nextLine();
        String input = scanner.nextLine();

        while (!input.equals("Registration")) {
            String command = input.split(" ")[0];

            if (command.equals("Letters")) {
                String typeCase = input.split(" ")[1];
                if (typeCase.equals("Lower")) {
                    username = username.toLowerCase();
                } else if (typeCase.equals("Upper")) {
                    username = username.toUpperCase();
                }

                System.out.println(username);

            } else if (command.equals("Reverse")) {
                int startIndex = Integer.parseInt(input.split(" ")[1]);
                int endIndex = Integer.parseInt(input.split(" ")[2]);
                boolean isIndicesValid = validateIndices(startIndex, endIndex, username);

                if (isIndicesValid) {
                    String reversedStr = "";
                    String cutStr = username.substring(startIndex, endIndex + 1);
                    for (int i = cutStr.length() - 1; i >= 0; i--) {
                        reversedStr += cutStr.charAt(i);
                    }

                    System.out.println(reversedStr);
                }

            } else if (command.equals("Substring")) {
                String subStr = input.split(" ")[1];

                if (username.contains(subStr)) {
                    // ESCAPED SPECIAL CHARACTERS in String  ->  Pattern.quote
                    String escapedSubStr = Pattern.quote(subStr);
                    username = username.replaceFirst(escapedSubStr, "");  // JUST ONCE
                    System.out.println(username);
                } else {
                    System.out.printf("The username %s doesn't contain %s.\n", username, subStr);
                }

            } else if (command.equals("Replace")) {
                String givenChar = input.split(" ")[1];
                // ESCAPED SPECIAL CHARACTERS in String  ->  Pattern.quote (WHILE LOOP INCLUDED MUST HAVE)
                String escapedGivenChar = Pattern.quote(givenChar);
                while (username.contains(givenChar)) {
                    username = username.replaceFirst(escapedGivenChar, "-");   // ALL OCCURRENCES
                }

                System.out.println(username);

            } else if (command.equals("IsValid")) {
                String givenChar = input.split(" ")[1];
                if (username.contains(givenChar)) {
                    System.out.println("Valid username.");
                } else {
                    System.out.printf("%s must be contained in your username.\n", givenChar);
                }
            }

            input = scanner.nextLine();
        }
    }

    private static boolean validateIndices(int startIndex, int endIndex, String username) {
        if ((startIndex >= 0 && startIndex <= username.length() - 1) && (endIndex >= 0 && endIndex <= username.length() - 1) && startIndex < endIndex) {
            return true;
        }
        return false;
    }
}