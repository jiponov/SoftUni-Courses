import java.util.Scanner;

//100/100
public class Vacation {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double excursionPrice = Double.parseDouble(scanner.nextLine());
        double currentMoney = Double.parseDouble(scanner.nextLine());
        int spendDays = 0;
        int allDays = 0;

        while (excursionPrice > currentMoney) {
            String command = scanner.nextLine();
            double money = Double.parseDouble(scanner.nextLine());
            allDays++;

            if (command.equals("spend")) {
                currentMoney -= money;
                if (currentMoney < 0) {
                    currentMoney = 0;
                }
                spendDays++;
                if (spendDays == 5) {
                    break;
                }

            } else {
                currentMoney += money;
                spendDays = 0;
            }
        }

        String output = "";
        if (currentMoney >= excursionPrice) {
            output = String.format("You saved the money for %d days.", allDays);
        } else {
            output = String.format("You can't save the money.%n%d", allDays);
        }

        System.out.println(output);
    }
}

//100/100