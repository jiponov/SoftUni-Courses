import java.util.Scanner;
//100/100
public class Coins {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double change = Double.parseDouble(scanner.nextLine());
        change = Math.floor(change * 100);
        int coins = 0;

        while (change > 0) {
            if (change >= 200) {
                coins++;
                change -= 200;
            } else if (change >= 100) {
                coins++;
                change -= 100;
            } else if (change >= 50) {
                coins++;
                change -= 50;
            } else if (change >= 20) {
                coins++;
                change -= 20;
            } else if (change >= 10) {
                coins++;
                change -= 10;
            } else if (change >= 5) {
                coins++;
                change -= 5;
            } else if (change >= 2) {
                coins++;
                change -= 2;
            } else if (change >= 1) {
                coins++;
                change -= 1;
            }
        }

        System.out.println(coins);
    }
}
