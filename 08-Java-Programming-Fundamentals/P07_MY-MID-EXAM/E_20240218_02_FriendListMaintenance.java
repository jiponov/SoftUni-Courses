package P07_MY_MID_EXAM;
// 100/100 jiponov

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class E_20240218_02_FriendListMaintenance {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        List<String> friendsState = Arrays
                .stream(scanner.nextLine().split(", "))
                .collect(Collectors.toList());

        int countBlacklistedNames = 0;
        int countLostNames = 0;

        while (scanner.hasNextLine()) {
            String input = scanner.nextLine();
            if (input.equals("Report")) {
                break;
            }

            List<String> tokens = Arrays
                    .stream(input.split(" "))
                    .collect(Collectors.toList());

            String command = tokens.get(0);

            if (command.equals("Blacklist")) {
                String name = tokens.get(1);

                if (friendsState.contains(name)) {
                    int indexName = friendsState.indexOf(name);
                    String blacklistedName = "Blacklisted";
                    friendsState.set(indexName, blacklistedName);
                    countBlacklistedNames++;
                    System.out.printf("%s was blacklisted.\n", name);
                } else {
                    System.out.printf("%s was not found.\n", name);
                }

            } else if (command.equals("Error")) {
                int index = Integer.parseInt(tokens.get(1));
                boolean isValidIndex = validateIndex(friendsState, index);
                boolean isValidName = validateName(friendsState, index);

                if (isValidIndex && isValidName) {
                    boolean isNotLostToo = !(friendsState.get(index).contains("Lost"));
                    if (isNotLostToo) {
                        String element = friendsState.get(index);
                        String lostElement = "Lost";
                        friendsState.set(index, lostElement);
                        countLostNames++;
                        System.out.printf("%s was lost due to an error.\n", element);
                    }
                }

            } else if (command.equals("Change")) {
                int index = Integer.parseInt(tokens.get(1));
                String newName = tokens.get(2);
                boolean isValidIndex = validateIndex(friendsState, index);
                if (isValidIndex) {
                    String elementToChange = friendsState.get(index);
                    friendsState.set(index, newName);
                    System.out.printf("%s changed his username to %s.\n", elementToChange, newName);
                }
            }
        }


        String result = String.join(" ", friendsState);
        System.out.printf("Blacklisted names: %d\n" +
                "Lost names: %d\n" +
                "%s\n", countBlacklistedNames, countLostNames, result);
    }

    public static boolean validateIndex(List friendsState, int index) {
        if (index >= 0 && index <= friendsState.size() - 1) {
            return true;
        }
        return false;
    }

    public static boolean validateName(List friendsState, int index) {
        boolean isValidIndex = validateIndex(friendsState, index);
        if (isValidIndex) {
            String element = String.valueOf(friendsState.get(index));
            if (!element.equals("Blacklisted")) {
                return true;
            }
        }
        return false;
    }
}