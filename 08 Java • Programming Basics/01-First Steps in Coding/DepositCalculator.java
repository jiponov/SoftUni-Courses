// 100/100
import java.util.Scanner;

public class DepositCalculator {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);      // четец на конзолата

        double deposit = Double.parseDouble(scan.nextLine());
        int months = Integer.parseInt(scan.nextLine());
        double annualInterestRate = Double.parseDouble(scan.nextLine());

        // сума = депозирана сума  + срок на депозита * ((депозирана сума * годишен лихвен процент ) / 12)

        double interestPerYear = deposit * annualInterestRate / 100;
        double interestPerMonth = interestPerYear / 12;
        double result = deposit + months * interestPerMonth;

        System.out.printf("%.2f", result);      // закръгляне до втория знак
    }
}