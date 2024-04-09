package P14_MY_FINAL_RETAKE_EXAM;
// 100/100
// STRING

import java.util.Scanner;
import java.util.regex.Pattern;

public class E_20240408_01_Easter {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String myStr = scanner.nextLine();

        String input = scanner.nextLine();
        while (!input.equals("Easter")) {
            String command = input.split(" ")[0];

            if (command.equals("Replace")) {
                char currentChar = input.split(" ")[1].charAt(0);
                char newChar = input.split(" ")[2].charAt(0);

                String currentCharAsString = String.valueOf(currentChar);
                String replacedAsString = String.valueOf(newChar);   // OR: replacedSymbol + ""; Convert char to String

                // ESCAPED SPECIAL CHARACTERS in String
                String escapedGivenNewSymbol = Pattern.quote(replacedAsString);
                while (myStr.contains(currentCharAsString)) {
                    myStr = myStr.replace(currentCharAsString, replacedAsString);   // ALL OCCURRENCES
                }

                System.out.printf("%s\n", myStr);


            } else if (command.equals("Remove")) {
                String subStr = input.split(" ")[1];
                if (myStr.contains(subStr)) {
                    int startIndexOfSubStr = myStr.indexOf(subStr);
                    int subStrLength = subStr.length();
                    int endIndexOfSubStr = startIndexOfSubStr + subStrLength;

                    String start = myStr.substring(0, startIndexOfSubStr);
                    String end = myStr.substring(endIndexOfSubStr);
                    myStr = start + end;
                }

                System.out.printf("%s\n", myStr);


            } else if (command.equals("Includes")) {
                String subStr = input.split(" ")[1];
                if (myStr.contains(subStr)) {
                    System.out.println("True");
                } else {
                    System.out.println("False");
                }


            } else if (command.equals("Change")) {
                String type = input.split(" ")[1];

                if (type.equals("Lower")) {
                    myStr = myStr.toLowerCase();
                } else if (type.equals("Upper")) {
                    myStr = myStr.toUpperCase();
                }

                System.out.printf("%s\n", myStr);


            } else if (command.equals("Reverse")) {
                int startIndex = Integer.parseInt(input.split(" ")[1]);
                int endIndex = Integer.parseInt(input.split(" ")[2]);

                boolean isStartIndexValid = validateIndex(startIndex, myStr);
                boolean isEndIndexValid = validateIndex(endIndex, myStr);

                if (isStartIndexValid && isEndIndexValid) {
                    String str = myStr.substring(startIndex, endIndex + 1);
                    String reversed = "";
                    for (int i = str.length() - 1; i >= 0; i--) {
                        reversed += str.charAt(i);
                    }
                    System.out.println(reversed);
                }
            }


            input = scanner.nextLine();
        }
    }

    private static boolean validateIndex(int index, String myStr) {
        if (index >= 0 && index <= myStr.length() - 1) {
            return true;
        }
        return false;
    }
}