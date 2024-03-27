package P12_PREP_FINAL_EXAM;
// 100/100
// STRING

import java.util.Scanner;
import java.util.regex.Pattern;

public class E_04_01_PasswordReset_01 {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        String str = scanner.nextLine();

        String input = scanner.nextLine();
        while (!input.equals("Done")) {
            String command = input.split(" ")[0];

            if (command.equals("TakeOdd")) {
                String newPass = "";

                for (int i = 0; i < str.length(); i++) {
                    String currentEl = str.charAt(i) + "";
                    if (i % 2 != 0) {
                        newPass += currentEl;
                    }
                }

                str = newPass;
                System.out.println(str);

            } else if (command.equals("Cut")) {
                int index = Integer.parseInt(input.split(" ")[1]);
                int length = Integer.parseInt(input.split(" ")[2]);

                String getOccurrence = str.substring(index, index + length);
                // ESCAPED SPECIAL CHARACTERS in String  ->  Pattern.quote
                String escapedOccurrence = Pattern.quote(getOccurrence);
                str = str.replaceFirst(escapedOccurrence, "");

                System.out.println(str);

            } else if (command.equals("Substitute")) {
                String element = input.split(" ")[1];
                String substitute = input.split(" ")[2];

                if (str.contains(element)) {
                    str = str.replace(element, substitute);
                    System.out.println(str);
                } else {
                    System.out.println("Nothing to replace!");
                }
            }

            input = scanner.nextLine();
        }

        System.out.printf("Your password is: %s\n", str);
    }
}