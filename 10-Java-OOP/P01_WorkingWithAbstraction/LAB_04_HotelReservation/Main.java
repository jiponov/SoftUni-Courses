package P01_WorkingWithAbstraction.LAB_04_HotelReservation;
// 100/100
// enum task

import java.util.Scanner;


public class Main {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        // {pricePerDay} {numberOfDays} {season} {discountType}
        String input = scanner.nextLine();
        String[] splittedInput = input.split("\\s+");

        // [ "{pricePerDay}", "{numberOfDays}", "{season}", "{discountType}" ]
        double pricePerDay = Double.parseDouble(splittedInput[0]);
        int numberOfDays = Integer.parseInt(splittedInput[1]);

        // дай ми ОБЕКТЪТ от enum Season ,който има стойност .valueOf(splittedInput[2]);  ->  например "Winter" и дава WINTER("Winter", 3)
        Season season = Season.valueOf(splittedInput[2].toUpperCase());    // "Summer" -> SUMMER е обекта

        DiscountType discountType = DiscountType.valueOf(splittedInput[3].toUpperCase());  // КОЙ е обектът с тази стойност и връща тоя обект

        double holidayPrice = PriceCalculator.calculateHolidayPrice(pricePerDay, numberOfDays, season, discountType);

        System.out.printf("%.2f", holidayPrice);
    }

}