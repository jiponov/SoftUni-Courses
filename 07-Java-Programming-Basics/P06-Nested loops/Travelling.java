import java.util.Scanner;

public class Travelling {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String destination = "";
        double sum = 0;

        while (!destination.equals("End")) {
            destination = scanner.nextLine();
            if (destination.equals("End")) {
                break;
            }

            double minBudget = Double.parseDouble(scanner.nextLine());
            double money = 0;

            while (sum >= 0) {
                money = Double.parseDouble(scanner.nextLine());
                sum += money;
                if (sum >= minBudget) {
                    System.out.printf("Going to %s!%n", destination);
                    sum = 0;
                    break;
                }
            }
        }
    }
}

//100/100