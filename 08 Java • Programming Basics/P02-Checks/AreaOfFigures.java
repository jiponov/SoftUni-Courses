// 100/100
import java.util.Scanner;

public class AreaOfFigures {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double area = 0.0;
        String figure = scanner.nextLine();

        if (figure.equals("square")) {
            double a = Double.parseDouble(scanner.nextLine());
            area = a * a;
        } else if (figure.equals("rectangle")) {
            double a = Double.parseDouble(scanner.nextLine());
            double b = Double.parseDouble(scanner.nextLine());
            area = a * b;
        } else if (figure.equals("circle")) {
            double r = Double.parseDouble(scanner.nextLine());
            area = r * r * Math.PI;
        } else if (figure.equals("triangle")) {
            double a = Double.parseDouble(scanner.nextLine());
            double h = Double.parseDouble(scanner.nextLine());
            area = a * h / 2;
        }

        System.out.printf("%.3f", area);
    }
}
