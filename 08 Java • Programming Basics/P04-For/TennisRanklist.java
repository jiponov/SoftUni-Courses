import java.util.Scanner;

public class TennisRanklist {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int tournaments = Integer.parseInt(scanner.nextLine());
        int startingPoints = Integer.parseInt(scanner.nextLine());
        double points = 0;
        double wins = 0;

        for (int i = 0; i < tournaments; i++) {
            String stats = scanner.nextLine();

            if (stats.equals("W")) {
                points += 2000;
                wins++;
            } else if (stats.equals("F")) {
                points += 1200;
            } else if (stats.equals("SF")) {
                points += 720;
            }
        }

        double finalPoints = points + startingPoints;
        double avgPoints = Math.floor(points / tournaments);
        double winTours = (wins / tournaments) * 100;

        System.out.printf("Final points: %.0f%n", finalPoints);
        System.out.printf("Average points: %.0f%n", avgPoints);
        System.out.printf("%.2f%%", winTours);
    }
}

//100/100
