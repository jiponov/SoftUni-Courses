package P12_PREP_FINAL_EXAM;
// 100/100
// STRING

import java.util.Scanner;
import java.util.regex.Pattern;

public class E_03_01_SecretChat_01 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String msg = scanner.nextLine();
        String input = scanner.nextLine();

        while (!input.equals("Reveal")) {
            String command = input.split(":\\|:")[0];

            if (command.equals("InsertSpace")) {
                int index = Integer.parseInt(input.split(":\\|:")[1]);

                String start = msg.substring(0, index);
                String end = msg.substring(index);

                msg = start + " " + end;
                System.out.println(msg);

            } else if (command.equals("Reverse")) {
                String str = input.split(":\\|:")[1];
                if (msg.contains(str)) {
                    String reversedStr = "";
                    for (int i = str.length() - 1; i >= 0; i--) {
                        reversedStr += str.charAt(i);
                    }

                    String escapedStr = Pattern.quote(str);     // ESCAPED SPECIAL CHARACTERS in String  ->  Pattern.quote
                    msg = msg.replaceFirst(escapedStr, "");
                    msg = msg + reversedStr;

                    System.out.println(msg);
                } else {
                    System.out.println("error");
                }

            } else if (command.equals("ChangeAll")) {
                String str = input.split(":\\|:")[1];
                String replacement = input.split(":\\|:")[2];

                msg = msg.replace(str, replacement);
                System.out.println(msg);
            }

            input = scanner.nextLine();
        }

        System.out.printf("You have a new text message: %s", msg);
    }
}