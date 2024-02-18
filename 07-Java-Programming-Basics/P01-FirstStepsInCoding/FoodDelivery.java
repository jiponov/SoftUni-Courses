// 100/100
import java.util.Scanner;

public class FoodDelivery {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double chicken = 10.35;
        double fish = 12.40;
        double vegeterian = 8.15;
        int countChicken = Integer.parseInt(scanner.nextLine());
        int countFish = Integer.parseInt(scanner.nextLine());
        int countVegeterian = Integer.parseInt(scanner.nextLine());

        double priceChicken = chicken * countChicken;
        double priceFish = fish * countFish;
        double priceVegeterian = vegeterian * countVegeterian;
        double priceDesert = 0.2 * (priceVegeterian + priceChicken + priceFish);
        double delivery = 2.50;

        double price = delivery + priceDesert + priceChicken + priceFish + priceVegeterian;
        System.out.printf("%.2f", price);
    }
}