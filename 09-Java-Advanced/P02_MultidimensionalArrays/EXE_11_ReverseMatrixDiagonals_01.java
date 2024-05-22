package P02_MultidimensionalArrays;
// 100/100
// okay
// MATRIX

import java.util.Arrays;
import java.util.Scanner;

public class EXE_11_ReverseMatrixDiagonals_01 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int[] dimensions = Arrays
                .stream(scanner.nextLine().split(" "))
                .mapToInt(Integer::parseInt)
                .toArray();   // [4, 5]

        int rows = dimensions[0];   // брой редове
        int cols = dimensions[1];   // брой колони

        int[][] matrix = new int[rows][cols];

        // 1. въвеждаме матрицата
        fillMatrix(matrix, scanner);

        // 2. Print First Part
        for (int c = cols - 1; c > 0; c--) {   // за всеки един диагонал
            for (int row = rows - 1, col = c; row >= 0 && col < cols; row--, col++) {

                System.out.print(matrix[row][col] + " ");
            }

            System.out.println();
        }

        // 3. Print Second Part
        for (int r = rows - 1; r >= 0; r--) {   // за всеки един диагонал
            for (int row = r, col = 0; row >= 0 && col < cols; row--, col++) {

                System.out.print(matrix[row][col] + " ");
            }

            System.out.println();
        }
    }

    private static void fillMatrix(int[][] matrix, Scanner scanner) {
        for (int row = 0; row < matrix.length; row++) {
            matrix[row] = Arrays
                    .stream(scanner.nextLine().split("\\s+"))
                    .mapToInt(Integer::parseInt)
                    .toArray();
        }
    }
}