package P01_WorkingWithAbstraction.LAB_02_PointInRectangle;

// 100/100

import java.util.Arrays;
import java.util.Scanner;


public class Main {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        // {bottomLeftX} {bottomLeftY} {topRightX} {topRightY}
        int[] coordinates = Arrays
                .stream(scanner.nextLine().split(" "))
                .mapToInt(Integer::parseInt)
                .toArray();

        // [0]  ->  bottomLeft x   . . .
        int bottomLeftX = coordinates[0];
        int bottomLeftY = coordinates[1];
        int topRightX = coordinates[2];
        int topRightY = coordinates[3];

        Point bottomLeftPoint = new Point(bottomLeftX, bottomLeftY);   // долу ляво
        Point topRightPoint = new Point(topRightX, topRightY);    // горе дясно

        Rectangle rectangle = new Rectangle(bottomLeftPoint, topRightPoint);    // правоъгълник


        int countPoints = Integer.parseInt(scanner.nextLine());

        for (int i = 1; i <= countPoints; i++) {
            int[] checkPointCoordinates = Arrays
                    .stream(scanner.nextLine().split(" "))
                    .mapToInt(Integer::parseInt)
                    .toArray();
            int x = checkPointCoordinates[0];
            int y = checkPointCoordinates[1];

            Point searchedPoint = new Point(x, y);
            System.out.println(rectangle.contains(searchedPoint));
        }
    }
}