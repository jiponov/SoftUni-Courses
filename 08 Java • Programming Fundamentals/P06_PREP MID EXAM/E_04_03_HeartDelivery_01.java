package P06_PREP_MID_EXAM;
// 100/100

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class E_04_03_HeartDelivery_01 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        List<Integer> neededHeartsLine = Arrays
                .stream(scanner.nextLine().split("@"))
                .map(Integer::parseInt)
                .collect(Collectors.toList());

        int startIndex = 0;
        int lastPositionIndex = 0;

        while (scanner.hasNextLine()) {
            String input = scanner.nextLine();

            if (input.equals("Love!")) {
                break;
            }

            List<String> token = Arrays
                    .stream(input.split(" "))
                    .collect(Collectors.toList());

            int length = Integer.parseInt(token.get(1));
            //boolean isStartIndexValid = validateIndex(neededHeartsLine, startIndex);

            int jumpedIndex = startIndex + length;
            boolean isJumpValid = validateIndex(neededHeartsLine, jumpedIndex);

            if (isJumpValid) {
                int element = neededHeartsLine.get(jumpedIndex);
                if (element == 0) {
                    System.out.printf("Place %d already had Valentine's day.\n", jumpedIndex);
                    startIndex = jumpedIndex;
                    lastPositionIndex = jumpedIndex;

                    continue;
                }

                neededHeartsLine.set(jumpedIndex, element - 2);
                element = neededHeartsLine.get(jumpedIndex);
                startIndex = jumpedIndex;
                lastPositionIndex = jumpedIndex;
                if (element == 0) {
                    System.out.printf("Place %d has Valentine's day.\n", jumpedIndex);
                }

            } else {
                startIndex = 0;
                lastPositionIndex = 0;
                int element = neededHeartsLine.get(startIndex);
                if (element == 0) {
                    System.out.printf("Place %d already had Valentine's day.\n", startIndex);

                    continue;
                }

                neededHeartsLine.set(startIndex, element - 2);
                element = neededHeartsLine.get(startIndex);
                if (element == 0) {
                    System.out.printf("Place %d has Valentine's day.\n", startIndex);
                }
            }
        }


        System.out.printf("Cupid's last position was %d.\n", lastPositionIndex);

        boolean allHadValentinesDay = neededHeartsLine
                .stream()
                .allMatch(x -> x == 0);

        if (allHadValentinesDay) {
            System.out.println("Mission was successful.");
        } else {
            List<Integer> housesDidNotCelebrate = neededHeartsLine
                    .stream()
                    .filter(x -> x > 0)
                    .collect(Collectors.toList());
            int count = housesDidNotCelebrate.size();
            System.out.printf("Cupid has failed %d places.\n", count);
        }
    }

    public static boolean validateIndex(List neededHeartsLine, int index) {
        if (index >= 0 && index <= neededHeartsLine.size() - 1) {
            return true;
        }
        return false;
    }
}