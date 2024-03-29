package P12_PREP_FINAL_EXAM;

// 100/100
// STRING

import java.util.Scanner;

public class E_02_01_WorldTour_01 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String str = scanner.nextLine();
        String input = scanner.nextLine();

        while (!input.equals("Travel")) {
            String command = input.split(":")[0];

            if (command.equals("Add Stop")) {
                int index = Integer.parseInt(input.split(":")[1]);
                String newStop = input.split(":")[2];
                boolean isIndexValid = validateIndex(index, str);
                if (isIndexValid) {
                    String start = str.substring(0, index);
                    String end = str.substring(index);
                    str = start + newStop + end;
                }

                System.out.println(str);

            } else if (command.equals("Remove Stop")) {
                int startIndex = Integer.parseInt(input.split(":")[1]);
                int endIndex = Integer.parseInt(input.split(":")[2]);
                boolean isStartIndexValid = validateIndex(startIndex, str);
                boolean isEndIndexValid = validateIndex(endIndex, str);
                if (isStartIndexValid && isEndIndexValid) {
                    String start = str.substring(0, startIndex);
                    String deleted = str.substring(startIndex, endIndex + 1);
                    String end = str.substring(endIndex + 1);
                    str = start + end;
                }

                System.out.println(str);

            } else if (command.equals("Switch")) {
                String oldStr = input.split(":")[1];
                String newStr = input.split(":")[2];
                if (str.contains(oldStr)) {
                    str = str.replace(oldStr, newStr);
                }

                System.out.println(str);
            }

            input = scanner.nextLine();
        }

        System.out.printf("Ready for world tour! Planned stops: %s\n", str);
    }

    private static boolean validateIndex(int index, String str) {
        if (index >= 0 && index <= str.length() - 1) {
            return true;
        }
        return false;
    }
}