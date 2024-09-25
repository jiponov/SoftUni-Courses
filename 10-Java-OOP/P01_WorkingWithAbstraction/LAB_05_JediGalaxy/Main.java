package P01_WorkingWithAbstraction.LAB_05_JediGalaxy;
// package LAB_05_JediGalaxy;
// 100/100

import java.util.Arrays;
import java.util.Scanner;


public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        //"3 4"
        int[] dimensions = readPositions(scanner.nextLine());
        int rows = dimensions[0]; // брой на редове
        int cols = dimensions[1]; // брой на колони

        int[][] matrix = new int[rows][cols]; // поле
        fillField(rows, cols, matrix); // запълваме полето с числата от 1 до ...

        String command = scanner.nextLine();
        long sum = 0; // общо събраните звезди
        while (!command.equals("Let the Force be with you")) {
            // ЛОШИЯ
            int[] evilPositions = readPositions(scanner.nextLine()); //[3, 4] -> ред и колоната на лошия
            int rowEvil = evilPositions[0]; // ред на лошия
            int colEvil = evilPositions[1]; // колона на лошия
            // движение на лошия
            moveEvil(matrix, rowEvil, colEvil);

            // ДЖЕДАЯ
            int[] jediPositions = readPositions(command); //[4, 5] -> ред и колоната на джедая
            int rowJedi = jediPositions[0]; // ред на джедая
            int colJedi = jediPositions[1]; // колона на джедая
            // движение и събиране на звезди на джедая
            int collectStars = getCollectedStars(matrix, rowJedi, colJedi);
            sum += collectStars;

            command = scanner.nextLine();
        }

        System.out.println(sum);

    }

    private static int getCollectedStars(int[][] matrix, int rowJedi, int colJedi) {
        int countStars = 0;
        while (rowJedi >= 0 && colJedi < matrix[1].length) {
            if (rowJedi < matrix.length && colJedi >= 0 && colJedi < matrix[0].length) {
                countStars += matrix[rowJedi][colJedi];
            }

            colJedi++;
            rowJedi--;
        }
        return countStars;
    }

    private static void moveEvil(int[][] matrix, int rowEvil, int colEvil) {
        while (rowEvil >= 0 && colEvil >= 0) {
            if (rowEvil < matrix.length && colEvil < matrix[0].length) {
                matrix[rowEvil][colEvil] = 0;
            }
            rowEvil--;
            colEvil--;
        }
    }

    private static int[] readPositions(String command) {
        return Arrays.stream(command.split(" ")).mapToInt(Integer::parseInt).toArray();
    }

    private static void fillField(int rows, int cols, int[][] matrix) {
        int value = 0;
        for (int row = 0; row < rows; row++) {
            for (int col = 0; col < cols; col++) {
                matrix[row][col] = value++;
            }
        }
    }
}