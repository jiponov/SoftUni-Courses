package P06_PREP_MID_EXAM;
// 100/100

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class E_04_01_GuineaPig_01 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double food = Double.parseDouble(scanner.nextLine());
        double hay = Double.parseDouble(scanner.nextLine());
        double cover = Double.parseDouble(scanner.nextLine());
        double weight = Double.parseDouble(scanner.nextLine());

        int month = 30;
        int day = 0;

        while (month > 0) {
            month--;
            day++;

            double eatenFood = 0.3;
            food -= eatenFood;

            if (day % 2 == 0) {
                hay -= 0.05 * food;
            }

            if (day % 3 == 0) {
                cover -= weight / 3;
            }

            if (food <= 0 || hay <= 0 || cover <= 0) {
                System.out.println("Merry must go to the pet store!");
                return;
            }
        }

        System.out.printf("Everything is fine! Puppy is happy! Food: %.2f, Hay: %.2f, Cover: %.2f.\n", food, hay, cover);
    }
}