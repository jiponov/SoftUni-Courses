package P02_MultidimensionalArrays;
// 100/100
// MATRIX

import java.util.Arrays;
import java.util.Scanner;

public class EXE_03_DiagonalDifference_01 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int n = Integer.parseInt(scanner.nextLine());   // бр. редове = бр. колони
        int[][] matrix = new int[n][n];

        // 1. напълваме матрицата
        fillMatrix(matrix, scanner);

        // 2. сума на числата на главния диагонал
        int sumPrimary = getSumPrimaryDiagonal(matrix);

        // 3. сума на числата на второстепенния диагонал
        int sumSecondary = getSumSecondaryDiagonal(matrix);

        // 4. принтираме абс. стойност на разликата
        System.out.println(Math.abs(sumPrimary - sumSecondary));
    }


    private static void fillMatrix(int[][] matrix, Scanner scanner) {
        for (int row = 0; row < matrix.length; row++) {
            for (int col = 0; col < matrix.length; col++) {
                matrix[row][col] = scanner.nextInt();
            }
        }
    }

    private static int getSumPrimaryDiagonal(int[][] matrix) {
        int sum = 0;   // сума на числата от главния диагонал
        // всички елементи в матрицата -> сумирам тези, които са на главния диагонал
        // (ред = кол);  if (row == col)

        for (int row = 0; row < matrix.length; row++) {
            for (int col = 0; col < matrix.length; col++) {

                int currentElement = matrix[row][col];   // текущия елемент
                if (row == col) {
                    // елементът е на главния диагонал
                    sum += currentElement;
                }
            }
        }

        return sum;
    }

    private static int getSumSecondaryDiagonal(int[][] matrix) {
        int sum = 0;   // сума на числата от второстепенния диагонал
        // всички елементи в матрицата -> сумирам тези, които са на второстепенния диагонал:
        // (колона = общ брой редове - текущ ред - 1);  if (col == matrix.length - row - 1)

        for (int row = 0; row < matrix.length; row++) {
            for (int col = 0; col < matrix.length; col++) {

                int currentElement = matrix[row][col];   // текущия елемент
                if (col == matrix.length - row - 1) {
                    // елементът е на второстепенния диагонал
                    sum += currentElement;
                }
            }
        }

        return sum;
    }
}