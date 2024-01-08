// 100/100

import java.util.Scanner;

public class LunchBreak {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // %s за текст (стринг), %d за цели числа, %f за десетични числа.

        String film = scanner.nextLine();

        int timeSerials = Integer.parseInt(scanner.nextLine());
        int timeBreak = Integer.parseInt(scanner.nextLine());

        double timeLunch = timeBreak / 8.0;
        double timeRest = timeBreak / 4.0;

        double timeLeft = timeBreak - timeLunch - timeRest;

        if (timeLeft >= timeSerials) {
            System.out.printf("You have enough time to watch %s and left with %.0f minutes free time.", film, Math.ceil(timeLeft - timeSerials));
        } else {
            System.out.printf("You don't have enough time to watch %s, you need %.0f more minutes.", film, Math.ceil(timeSerials - timeLeft));
        }
    }
}