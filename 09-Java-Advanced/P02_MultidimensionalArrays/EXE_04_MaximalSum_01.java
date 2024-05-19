package P02_MultidimensionalArrays;
// 100/100
// MATRIX

import java.util.Arrays;
import java.util.Scanner;

public class EXE_04_MaximalSum_01 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int[] numbers = Arrays
                .stream(scanner.nextLine().split("\\s+"))
                .mapToInt(Integer::parseInt)
                .toArray();

        int rows = numbers[0];
        int cols = numbers[1];

        int[][] matrix = new int[rows][rows];

        // 1. Попълваме МАТРИЦАТА
        fillMatrix(matrix, scanner);

        // 2. Намираме МАТРИЦАТА
        int maxSum = Integer.MIN_VALUE;
        int bestStartingRow = 0;   // от кой РЕД започва най-добрата матрица
        int bestStartingCol = 0;   // от коя КОЛОНА започва най-добрата матрица

        for (int row = 0; row < rows - 2; row++) {
            for (int col = 0; col < cols - 2; col++) {

                int startElement = matrix[row][col];   // елемент който МОЖЕ да образува матрица 3х3
                int sum = startElement + matrix[row][col + 1] + matrix[row][col + 2]
                        + matrix[row + 1][col] + matrix[row + 1][col + 1] + matrix[row + 1][col + 2]
                        + matrix[row + 2][col] + matrix[row + 2][col + 1] + matrix[row + 2][col + 2];

                if (sum > maxSum) {
                    maxSum = sum;
                    bestStartingRow = row;
                    bestStartingCol = col;
                }
            }
        }


        System.out.println("Sum = " + maxSum);
        for (int row = bestStartingRow; row <= bestStartingRow + 2; row++) {
            for (int col = bestStartingCol; col <= bestStartingCol + 2; col++) {

                System.out.print(matrix[row][col] + " ");
            }

            System.out.println();
        }
    }


    public static void fillMatrix(int[][] matrix, Scanner scanner) {
        for (int row = 0; row < matrix.length; row++) {
            matrix[row] = Arrays
                    .stream(scanner.nextLine().split("\\s+"))
                    .mapToInt(Integer::parseInt)
                    .toArray();
        }
    }
}

/*

private static void printMatrix(String[][] matrix) {
    for (int row = 0; row < matrix.length; row++) {
        for (int col = 0; col < matrix[row].length; col++) {

            System.out.print(matrix[row][col] + " ");
        }

        System.out.println();
    }
}

*/