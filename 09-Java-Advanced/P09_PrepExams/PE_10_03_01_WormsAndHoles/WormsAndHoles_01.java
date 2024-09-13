package P09_PrepExams.PE_10_03_01_WormsAndHoles;
// 100/100

import java.util.Scanner;
import java.util.*;
import java.util.stream.Collectors;

public class WormsAndHoles_01 {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        String wormsInput = scanner.nextLine();
        String holesInput = scanner.nextLine();

        ArrayDeque<Integer> stackWorms = new ArrayDeque<>();
        ArrayDeque<Integer> queueHoles = new ArrayDeque<>();

        String[] splitted = wormsInput.split("\\s+");
        for (String s : splitted) {
            int element = Integer.valueOf(s);
            stackWorms.push(element);
        }

//        Arrays
//                .stream(wormsInput.split("\\s+"))
//                .map(Integer::parseInt)
//                .forEach(stackWorms::push);

        Arrays
                .stream(holesInput.split("\\s+"))
                .map(Integer::parseInt)
                .forEach(queueHoles::offer);

        int initialWorms = stackWorms.size();
        int counterWormFoundHole = 0;


        while (!stackWorms.isEmpty() && !queueHoles.isEmpty()) {

            int worm = stackWorms.peek();
            int hole = queueHoles.peek();

            if (worm == hole) {
                stackWorms.pop();
                queueHoles.poll();

                counterWormFoundHole++;

            } else {
                stackWorms.pop();
                queueHoles.poll();

                worm -= 3;
                // ако червеят не е умрял
                if (worm > 0) {
                    stackWorms.push(worm);
                }
            }

        }


        // PRINT

        // 1.MATCHES
        if (counterWormFoundHole > 0) {
            System.out.printf("Matches: %d\n", counterWormFoundHole);
        } else {
            System.out.println("There are no matches.");
        }

        // 2.WORMS
        if (stackWorms.isEmpty() && initialWorms == counterWormFoundHole) {
            System.out.println("Every worm found a suitable hole!");
        }

        if (stackWorms.isEmpty() && initialWorms > counterWormFoundHole) {
            System.out.println("Worms left: none");
        }

        if (!stackWorms.isEmpty()) {
            System.out.print("Worms left: ");

            // Convert ArrayDeque to List
            List<Integer> list = new ArrayList<>();
            for (Integer e : stackWorms) {
                list.add(e);
            }

            // Reverse the List
            // Collections.reverse(list);

            // Clear the original stack
            stackWorms.clear();

            // Push all elements from the reversed List back to the stack
            for (Integer e : list) {
                stackWorms.push(e);
            }

            // print
            System.out.println(stackWorms
                    .stream()
                    .map(String::valueOf)
                    .collect(Collectors.joining(", "))
            );
        }

        // 3.HOLES
        if (queueHoles.isEmpty()) {
            System.out.println("Holes left: none");
        } else {
            System.out.print("Holes left: ");
            System.out.println(queueHoles
                    .stream()
                    .map(String::valueOf)
                    .collect(Collectors.joining(", "))
            );
        }

    }
}


/*
Начин 2  ->

// Convert ArrayDeque to List
            List<Integer> list = new ArrayList<>(stackWorms);
            // Reverse the List
            Collections.reverse(list);

            String output = list.stream().map(String::valueOf).collect(Collectors.joining(", "));
            System.out.println("Worms left: " + output)

*/