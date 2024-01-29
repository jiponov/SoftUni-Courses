import java.util.Scanner;

//100/100
public class TrekkingMania {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int groups = Integer.parseInt(scanner.nextLine());
        int countMusala = 0;
        int countMonblan = 0;
        int countKilimandgaro = 0;
        int countK2 = 0;
        int countEverest = 0;

        int totalPeople = 0;

        for (int i = 0; i < groups; i++) {
            int currentGroup = Integer.parseInt(scanner.nextLine());

            if (currentGroup <= 5) {
                countMusala += currentGroup;
            } else if (currentGroup <= 12) {
                countMonblan += currentGroup;
            } else if (currentGroup <= 25) {
                countKilimandgaro += currentGroup;
            } else if (currentGroup <= 40) {
                countK2 += currentGroup;
            } else if (currentGroup >= 41) {
                countEverest += currentGroup;
            }

            totalPeople += currentGroup;
        }

        double musala = (countMusala * 1.0 / totalPeople) * 100;
        double monblan = (countMonblan * 1.0 / totalPeople) * 100;
        double kilimandgaro = (countKilimandgaro * 1.0 / totalPeople) * 100;
        double k2 = (countK2 * 1.0 / totalPeople) * 100;
        double everest = (countEverest * 1.0 / totalPeople) * 100;

        System.out.printf("%.2f%%%n", musala);
        System.out.printf("%.2f%%%n", monblan);
        System.out.printf("%.2f%%%n", kilimandgaro);
        System.out.printf("%.2f%%%n", k2);
        System.out.printf("%.2f%%", everest);
    }
}
