package P05_FunctionalProgramming;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Scanner;
import java.util.function.Predicate;
import java.util.stream.Collectors;

public class EXE_11_ThePartyReservationFilterModule_01 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        ArrayList<String> guests = Arrays
                .stream(scanner.nextLine().split("\\s+"))
                .collect(Collectors.toCollection(ArrayList::new));

        String line = scanner.nextLine();

        HashMap<String, Predicate> predicates = new HashMap<>();

        while (!line.equals("Print")) {

            String[] tokens = line
                    .substring(line.indexOf(";") + 1)
                    .split("([ ;]+)");

            int index = 2;
            if (tokens.length == 2) {
                index = 1;
            }

            String name = tokens[0] + tokens[index];

            if (line.contains("Add")) {
                Predicate<String> predicate = null;

                if (tokens[0].equals("Starts")) {
                    predicate = s -> s.startsWith(tokens[2]);
                    predicates.putIfAbsent(name, predicate);
                } else if (tokens[0].equals("Ends")) {
                    predicate = s -> s.endsWith(tokens[2]);
                    predicates.putIfAbsent(name, predicate);
                } else if (tokens[0].equals("Length")) {
                    predicate = s -> s.length() == Integer.parseInt(tokens[2]);
                    predicates.putIfAbsent(name, predicate);
                } else if (tokens[0].equals("Contains")) {
                    predicate = s -> s.contains(tokens[1]);
                    predicates.putIfAbsent(name, predicate);
                }

            } else {
                predicates.remove(name);
            }

            line = scanner.nextLine();
        }

        for (String guest : guests) {
            boolean isGoing = true;

            for (String entry : predicates.keySet()) {
                if (predicates.get(entry).test(guest)) {
                    isGoing = false;
                    break;
                }
            }

            if (isGoing) {
                System.out.print(guest + " ");
            }
        }
    }
}
