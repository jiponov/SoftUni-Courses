package P02_MultidimensionalArrays;
// 100/100
// MATRIX

import java.util.Arrays;
import java.util.Scanner;

public class LAB_04_SumMatrixElements_01 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int[] dimensions = Arrays
                .stream(scanner.nextLine().split(", "))
                .mapToInt(Integer::parseInt)
                .toArray();

        int rows = dimensions[0];
        int cols = dimensions[1];

        int[][] matrix = new int[rows][cols];

        int totalSum = 0;

        for (int row = 0; row < rows; row++) {
            matrix[row] = Arrays
                    .stream(scanner.nextLine().split(", "))
                    .mapToInt(Integer::parseInt)
                    .toArray();
        }

        for (int[] arr : matrix) {
            for (int e : arr) {
                totalSum += e;
            }
        }

        System.out.println(rows);
        System.out.println(cols);
        System.out.println(totalSum);
    }
}