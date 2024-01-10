import java.util.Scanner;

public class Cinema {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String typeMovie = scanner.nextLine();
        int rows = Integer.parseInt(scanner.nextLine());
        int columns = Integer.parseInt(scanner.nextLine());
        double output = 0.0;

        if (typeMovie.equals("Premiere")) {
            output = rows * columns * 12;
            System.out.printf("%.2f leva", output);
        } else if (typeMovie.equals("Normal")) {
            output = rows * columns * 7.5;
            System.out.printf("%.2f leva", output);
        } else if (typeMovie.equals("Discount")) {
            output = rows * columns * 5;
            System.out.printf("%.2f leva", output);
        }
    }
}

// 100/100