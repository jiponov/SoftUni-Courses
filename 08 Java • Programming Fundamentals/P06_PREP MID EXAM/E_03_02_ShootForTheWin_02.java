package P06_PREP_MID_EXAM;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class E_03_02_ShootForTheWin_02 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        List<Integer> targets = new ArrayList<>();
        targets = Arrays
                .stream(scanner.nextLine().split(" "))
                .map(Integer::parseInt)
                .collect(Collectors.toList());

        int shots = 0;
        String input = scanner.nextLine();

        while (!input.equals("End")) {
            int index = Integer.parseInt(input);

            if (index >= 0 && index <= targets.size() - 1) {
                int item = targets.get(index);
                int savedItem = item;
                item = -1;
                targets.set(index, item);
                shots++;

                targets.replaceAll(x -> {
                    if (x != -1 && x > savedItem) {
                        return x - savedItem;
                    }
                    if (x != -1 && x <= savedItem) {
                        return x + savedItem;
                    }
                    return x;
                });
            }

            input = scanner.nextLine();
        }


        List<String> targetsAsString = new ArrayList<>();
        for (int target : targets) {
            targetsAsString.add(String.valueOf(target));
        }

        System.out.printf("Shot targets: %d -> " + "%s", shots, String.join(" ", targetsAsString));
    }
}

// 100/100