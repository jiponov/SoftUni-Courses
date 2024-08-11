package P07_Generics.EXE_11_Threeuple;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        List<Threeuple> threeples = new ArrayList<>();

        readFirstThreeuples(scanner, threeples);
        readSecondThreeuples(scanner, threeples);
        readThirdThreeuples(scanner, threeples);
        printThreeuples(threeples);
    }

    private static void printThreeuples(List<Threeuple> threeples) {
        StringBuilder sb = new StringBuilder();
        for (Threeuple threeuple : threeples) {
            sb.append(threeuple).append(System.lineSeparator());
        }
        System.out.print(sb.toString());
    }

    private static void readFirstThreeuples(Scanner scanner, List<Threeuple> threeples) {
        String[] tokens = scanner.nextLine().split("\\s+");
        StringBuilder fullName = new StringBuilder();
        String name = fullName.append(tokens[0]).append(" ").append(tokens[1]).toString();
        String address = tokens[2];
        String town = tokens[3];

        Threeuple<String, String, String> firstThreeuples = new Threeuple<>(name, address, town);
        threeples.add(firstThreeuples);
    }

    private static void readSecondThreeuples(Scanner scanner, List<Threeuple> threeples) {
        String[] tokens = scanner.nextLine().split("\\s+");
        String name = tokens[0];
        int litersOfBeer = Integer.parseInt(tokens[1]);
        String drunk = tokens[2];
        boolean isDrunk = true;
        if (!drunk.equals("drunk")) {
            isDrunk = false;
        }

        Threeuple<String, Integer, Boolean> secondThreeuples = new Threeuple<>(name, litersOfBeer, isDrunk);
        threeples.add(secondThreeuples);
    }

    private static void readThirdThreeuples(Scanner scanner, List<Threeuple> threeples) {
        String[] tokens = scanner.nextLine().split("\\s+");
        String name = tokens[0];
        double accountBalance = Double.parseDouble(tokens[1]);
        String bankName = tokens[2];

        Threeuple<String, Double, String> thirdThreeupless = new Threeuple<>(name, accountBalance, bankName);
        threeples.add(thirdThreeupless);
    }

}
