import java.util.Scanner;

public class HotelRoom {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String month = scanner.nextLine();
        int nights = Integer.parseInt(scanner.nextLine());
        double priceStudio = 0.0;
        double priceApartment = 0.0;

        if (month.equals("May")) {
            priceStudio = 50 * nights;
            priceApartment = 65 * nights;
        } else if (month.equals("October")) {
            priceStudio = 50 * nights;
            priceApartment = 65 * nights;
        } else if (month.equals("June")) {
            priceStudio = 75.2 * nights;
            priceApartment = 68.7 * nights;
        } else if (month.equals("September")) {
            priceStudio = 75.2 * nights;
            priceApartment = 68.7 * nights;
        } else if (month.equals("July")) {
            priceStudio = 76 * nights;
            priceApartment = 77 * nights;
        } else if (month.equals("August")) {
            priceStudio = 76 * nights;
            priceApartment = 77 * nights;
        }

        if (month.equals("May") || month.equals("October")) {
            if (nights > 7 && nights < 14) {
                priceStudio = priceStudio - (priceStudio * 0.05);
            } else if (nights > 14) {
                priceStudio = priceStudio - (priceStudio * 0.30);
            }
        } else if (month.equals("June") || month.equals("September")) {
            if (nights > 14) {
                priceStudio = priceStudio - (priceStudio * 0.20);
            }
        }

        if (month.equals("May") || month.equals("June") || month.equals("July") || month.equals("August") || month.equals("September") || month.equals("October")) {
            if (nights > 14) {
                priceApartment = priceApartment - (priceApartment * 0.1);
            }
        }

        System.out.printf("Apartment: %.2f lv.", priceApartment);
        System.out.println("");
        System.out.printf("Studio: %.2f lv.", priceStudio);
    }
}

// 100/100