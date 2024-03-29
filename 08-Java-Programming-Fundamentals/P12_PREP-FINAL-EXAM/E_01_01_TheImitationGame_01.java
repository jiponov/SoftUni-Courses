package P12_PREP_FINAL_EXAM;
// STRING

import java.util.Scanner;

public class E_01_01_TheImitationGame_01 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String msg = scanner.nextLine();
        String input = scanner.nextLine();

        while (!input.equals("Decode")) {
            String command = input.split("\\|")[0];

            if (command.equals("Move")) {
                int nLetters = Integer.parseInt(input.split("\\|")[1]);

                String movedStart = msg.substring(0, nLetters);
                String movedEnd = msg.substring(nLetters);          // OR:  (nLetters, msg.length())
                msg = movedEnd + movedStart;

            } else if (command.equals("Insert")) {
                int index = Integer.parseInt(input.split("\\|")[1]);
                String newValue = input.split("\\|")[2];

                String start = msg.substring(0, index);
                String end = msg.substring(index, msg.length());
                msg = start + newValue + end;

            } else if (command.equals("ChangeAll")) {
                String occurrence = input.split("\\|")[1];
                String replacement = input.split("\\|")[2];

                msg = msg.replace(occurrence, replacement);
            }

            input = scanner.nextLine();
        }

        System.out.printf("The decrypted message is: %s", msg);
    }
}
// 100/100

// if (input.split("\\|")[2].length() > 1)
// char value = input.split("\\|")[2].charAt(0);