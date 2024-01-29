package P02_DataType;

import java.util.Scanner;

public class CenturiesToMinutes {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        byte centuries = Byte.parseByte(scanner.nextLine());
        int years = centuries * 100;
        double days = years * 365.2422;
        double hours = days * 24;
        double minutes = hours * 60;

        System.out.printf("%d centuries = %d years = %.0f days = %.0f hours = %.0f minutes", centuries, years, days, hours, minutes);
    }
}

// 100/100
// 1 centuries = 100 years = 36524 days = 876581 hours = 52594877 minutes
// Assume that a year has 365.2422 days on average (the Tropical year).