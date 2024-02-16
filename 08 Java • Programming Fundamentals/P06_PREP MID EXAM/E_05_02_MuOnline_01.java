package P06_PREP_MID_EXAM;
// 100/100

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class E_05_02_MuOnline_01 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int health = 100;
        int bitcoins = 0;
        List<String> dungeon = Arrays
                .stream(scanner.nextLine().split("\\|"))
                .collect(Collectors.toList());
        int dungeonLength = dungeon.size();
        int bestRoomCount = 0;


        for (int i = 0; i < dungeonLength; i++) {
            String token = dungeon.get(i);
            List<String> room = Arrays
                    .stream(token.split(" "))
                    .collect(Collectors.toList());

            String command = room.get(0);
            int number = Integer.parseInt(room.get(1));

            if (command.equals("potion")) {
                bestRoomCount++;
                int temp = health + number;
                int healedAmount = 0;
                if (temp > 100) {
                    healedAmount = 100 - health;
                    health = 100;
                } else {
                    healedAmount = number;
                    health += number;
                }

                System.out.printf("You healed for %d hp.\n", healedAmount);
                System.out.printf("Current health: %d hp.\n", health);

            } else if (command.equals("chest")) {
                bestRoomCount++;
                bitcoins += number;
                System.out.printf("You found %d bitcoins.\n", number);

            } else {
                health -= number;
                bestRoomCount++;
                if (health > 0) {
                    System.out.printf("You slayed %s.\n", command);
                } else {
                    System.out.printf("You died! Killed by %s.\n", command);
                    System.out.printf("Best room: %d\n", bestRoomCount);
                    return;
                }
            }
        }


        System.out.printf("You've made it!\n" +
                "Bitcoins: %d\n" +
                "Health: %d\n", bitcoins, health);
    }
}