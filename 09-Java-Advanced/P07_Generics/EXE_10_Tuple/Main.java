package P07_Generics.EXE_10_Tuple;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        List<Tuple> tuples = new ArrayList<>();

        readFirstTuple(scanner, tuples);
        readSecondTuple(scanner, tuples);
        readThirdTuple(scanner, tuples);
        printThreeuples(tuples);
    }

    private static void printThreeuples(List<Tuple> tuples) {
        StringBuilder sb = new StringBuilder();
        for (Tuple threeuple : tuples) {
            sb.append(threeuple).append(System.lineSeparator());
        }
        System.out.print(sb.toString());
    }

    private static void readFirstTuple(Scanner scanner, List<Tuple> tuples) {
        String[] tokens = scanner.nextLine().split("\\s+");
        StringBuilder fullName = new StringBuilder();
        String name = fullName.append(tokens[0]).append(" ").append(tokens[1]).toString();
        String address = tokens[2];

        Tuple<String, String> secondTuple = new Tuple<>(name, address);
        tuples.add(secondTuple);
    }

    private static void readSecondTuple(Scanner scanner, List<Tuple> tuples) {
        String[] tokens = scanner.nextLine().split("\\s+");
        String name = tokens[0];
        int litersOfBeer = Integer.parseInt(tokens[1]);

        Tuple<String, Integer> firstTuple = new Tuple<>(name, litersOfBeer);
        tuples.add(firstTuple);
    }

    private static void readThirdTuple(Scanner scanner, List<Tuple> tuples) {
        String[] tokens = scanner.nextLine().split("\\s+");
        int numInt = Integer.parseInt(tokens[0]);
        double numDouble = Double.parseDouble(tokens[1]);

        Tuple<Integer, Double> thirdTuple = new Tuple<>(numInt, numDouble);
        tuples.add(thirdTuple);
    }

}
