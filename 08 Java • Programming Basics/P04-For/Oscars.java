import java.util.Scanner;

public class Oscars {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String actor = scanner.nextLine();
        double points = Double.parseDouble(scanner.nextLine());
        int jury = Integer.parseInt(scanner.nextLine());

        double total = points;

        for (int i = 1; i <= jury; i++) {
            String judgeName = scanner.nextLine();
            double current = Double.parseDouble(scanner.nextLine());

            total += (judgeName.length() * current) / 2;

            // проверяваме дали сме достигнали 1250.5 => ако сме ги достигнали - принтираме console и прекратяваме програмата

            if (total >= 1250.5) {
                System.out.printf("Congratulations, %s got a nominee for leading role with %.1f!", actor, total);
                break;
            }
        }

        // проверяваме дали точките са под 1250.5
        double diff = Math.abs(1250.5 - total);
        if (total < 1250.5) {
            System.out.printf("Sorry, %s you need %.1f more!", actor, diff);
        }
    }
}

//100/100
