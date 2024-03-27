package P12_PREP_FINAL_EXAM;
// 100/100
// STRING

import java.util.Scanner;

public class E_05_01_ActivationKeys_01 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String key = scanner.nextLine();
        String input = scanner.nextLine();

        while (!input.equals("Generate")) {
            String command = input.split(">>>")[0];

            if (command.equals("Contains")) {
                String subStr = input.split(">>>")[1];
                if (key.contains(subStr)) {
                    System.out.printf("%s contains %s\n", key, subStr);
                } else {
                    System.out.println("Substring not found!");
                }

            } else if (command.equals("Flip")) {
                String typeCase = input.split(">>>")[1];
                int startIndex = Integer.parseInt(input.split(">>>")[2]);
                int endIndex = Integer.parseInt(input.split(">>>")[3]);

                String start = key.substring(0, startIndex);
                String end = key.substring(endIndex);
                String changed = "";

                if (typeCase.equals("Lower")) {
                    changed = key.substring(startIndex, endIndex).toLowerCase();
                } else if (typeCase.equals("Upper")) {
                    changed = key.substring(startIndex, endIndex).toUpperCase();
                }

                key = start + changed + end;
                System.out.println(key);

            } else if (command.equals("Slice")) {
                int startIndex = Integer.parseInt(input.split(">>>")[1]);
                int endIndex = Integer.parseInt(input.split(">>>")[2]);
                String start = key.substring(0, startIndex);
                String end = key.substring(endIndex);

                key = start + end;
                System.out.println(key);
            }

            input = scanner.nextLine();
        }

        System.out.printf("Your activation key is: %s\n", key);
    }
}