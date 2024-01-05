// 100/100
import java.util.Scanner;

public class SuppliesForSchool {
    public static void main(String[] args) {
        Scanner myscan = new Scanner(System.in);

        double chemicals = 5.80;
        double markers = 7.20;
        double cleaner = 1.20;

        int packageChemicals = Integer.parseInt(myscan.nextLine());
        int packageMarkers = Integer.parseInt(myscan.nextLine());
        int litersCleaner = Integer.parseInt(myscan.nextLine());
        int discountPercent = Integer.parseInt(myscan.nextLine());

        double priceChemicals = packageChemicals * chemicals;
        double priceMarkers = packageMarkers * markers;
        double priceCleaner = litersCleaner * cleaner;
        double totalPrice = priceChemicals + priceMarkers + priceCleaner;
        double totalPriceWithDiscount = totalPrice - (totalPrice * discountPercent / 100);

        System.out.printf("%.2f", totalPriceWithDiscount);
    }
}
