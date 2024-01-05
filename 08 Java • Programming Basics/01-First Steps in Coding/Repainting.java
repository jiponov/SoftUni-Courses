// 100/100
import java.util.Scanner;

public class Repainting {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        double naylon = 1.50;
        double paint = 14.50;
        double thinner = 5.00;

        int quantityNaylon = Integer.parseInt(scan.nextLine());
        int quantityPaint = Integer.parseInt(scan.nextLine());
        int quantityThinner = Integer.parseInt(scan.nextLine());
        int hours = Integer.parseInt(scan.nextLine());

        double priceNaylon = naylon * (quantityNaylon + 2);
        double pricePaint = paint * (quantityPaint + 0.1 * quantityPaint);
        double priceThinner = thinner * quantityThinner;
        double priceBags = 0.40;
        double workersOneHour = 0.3 * (priceBags + priceNaylon + pricePaint + priceThinner);
        double priceWorkers = workersOneHour * hours;

        double total = priceNaylon + pricePaint + priceThinner + priceWorkers + priceBags;
        System.out.printf("%.2f", total);
    }
}