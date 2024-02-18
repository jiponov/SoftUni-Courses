import java.util.Scanner;

//100/100
public class Building {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int floor = Integer.parseInt(scanner.nextLine());
        int room = Integer.parseInt(scanner.nextLine());

        for (int a = floor; a >= 1; a--) {
            System.out.printf("%n");

            for (int b = 0; b < room; b++) {
                if (floor == a) {
                    System.out.printf("L%d%d ", a, b);
                }
                if (a % 2 == 0 && a != floor) {
                    System.out.printf("O%d%d ", a, b);
                }
                if (a % 2 != 0 && a != floor) {
                    System.out.printf("A%d%d ", a, b);
                }
            }
        }
    }
}
