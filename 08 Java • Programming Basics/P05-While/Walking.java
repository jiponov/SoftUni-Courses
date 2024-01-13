import java.util.Scanner;

//100/100
public class Walking {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String input = "";
        int steps = 0;

        while (steps < 10000) {
            input = scanner.nextLine();

            if ("Going home".equals(input)) {
                steps += Integer.parseInt(scanner.nextLine());
                break;
            } else {
                steps += Integer.parseInt(input);
            }
        }

        int diff = Math.abs(steps - 10000);
        if (steps >= 10000) {
            System.out.printf("Goal reached! Good job!%n" + "%d steps over the goal!", diff);
        } else {
            System.out.printf("%d more steps to reach goal.", diff);
        }
    }
}