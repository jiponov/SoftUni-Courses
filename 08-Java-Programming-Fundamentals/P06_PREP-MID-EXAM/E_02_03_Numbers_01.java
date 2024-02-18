package P06_PREP_MID_EXAM;

import java.util.*;
import java.util.stream.Collectors;

public class E_02_03_Numbers_01 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        List<Integer> numbers = Arrays
                .stream(scanner.nextLine().split(" "))
                .map(Integer::parseInt)
                .collect(Collectors.toList());

        int sum = 0;
        for (int number : numbers) {
            sum += number;
        }

        double avg = sum * 1.0 / numbers.size();

        List<Integer> state = new ArrayList<>();
        for (int number : numbers) {
            if (number > avg) {
                state.add(number);
            }
        }

        if (state.isEmpty()) {
            System.out.println("No");
            return;
        }

        Collections.sort(state);
        Collections.reverse(state);

        List<String> stateAsString = new ArrayList<>();
        for (int num : state) {
            stateAsString.add(String.valueOf(num));
        }

        int topItemCount = Math.min(stateAsString.size(), 5);
        stateAsString = stateAsString.subList(0, topItemCount);

        System.out.println(String.join(" ", stateAsString));
    }
}

// 100/100