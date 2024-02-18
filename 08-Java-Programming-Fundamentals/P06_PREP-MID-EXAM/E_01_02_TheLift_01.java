package P06_PREP_MID_EXAM;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class E_01_02_TheLift_01 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int capacity = 4;
        int people = Integer.parseInt(scanner.nextLine());
        String line = scanner.nextLine();
        List<Integer> state = Arrays
                .stream(line.split(" "))
                .map(Integer::parseInt)
                .collect(Collectors.toList());

        for (int i = 0; i < state.size(); i++) {
            int currentWagon = state.get(i);
            int freeSpaces = capacity - currentWagon;

            if (people >= 0) {
                if (people >= freeSpaces) {
                    people -= freeSpaces;
                    currentWagon += freeSpaces;
                    state.set(i, currentWagon);
                } else if (people < freeSpaces) {
                    currentWagon += people;
                    people = 0;
                    state.set(i, currentWagon);
                }
            }
        }

        // for boolean TRUE  -  full lift (no empty spots); EVERY
        boolean fullLift = state.stream().allMatch(el -> el == capacity);
        // OR: for boolean TRUE  -  empty spots; SOME
        // OR: boolean emptySpots = state.stream().anyMatch(el -> el != capacity);

        List<String> stateAsString = new ArrayList<>();
        for (int num : state) {
            stateAsString.add(String.valueOf(num));
        }

        if (people <= 0 && !fullLift) {
            System.out.printf("The lift has empty spots!\n" + "%s\n", String.join(" ", stateAsString));
        } else if (people > 0 && fullLift) {
            System.out.printf("There isn't enough space! %d people in a queue!\n" + "%s\n", people, String.join(" ", stateAsString));
        } else if (people <= 0 && fullLift) {
            System.out.println(String.join(" ", stateAsString));
        }
    }
}

// 100/100