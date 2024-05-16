package P02_MultidimensionalArrays;
// 100/100
// MATRIX

import java.util.Arrays;
import java.util.Scanner;

public class LAB_01_CompareMatrices_01 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int[][] matrixOne = getMatrix(scanner);
        int[][] matrixTwo = getMatrix(scanner);

        boolean areEqual = matrixOne.length == matrixTwo.length;

        if (areEqual) {
            for (int array = 0; array < matrixOne.length; array++) {   // matrixOne.length = matrixTwo.length заради boolean areEqual
                int[] arrOne = matrixOne[array];
                int[] arrTwo = matrixTwo[array];

                areEqual = arrOne.length == arrTwo.length;

                if (areEqual) {
                    for (int i = 0; i < arrOne.length; i++) {
                        if (arrOne[i] != arrTwo[i]) {
                            areEqual = false;
                            break;
                        } else {
                            areEqual = true;
                        }
                    }
                }
            }
        }

        String output;

        if (areEqual) {
            output = "equal";
        } else {
            output = "not equal";
        }

        System.out.println(output);
        //System.out.println();   //START DEBUG HERE
    }

    private static int[][] getMatrix(Scanner scanner) {
        int[] matrixSize = readArray(scanner);

        int arrays = matrixSize[0];
        int indices = matrixSize[1];

        int[][] matrix = new int[arrays][indices];

        for (int row = 0; row < matrix.length; row++) {   // for (int i = 0; i < arrays; i++) {
            int[] arr = readArray(scanner);

            matrix[row] = arr;
        }

        return matrix;
    }

    private static int[] readArray(Scanner scanner) {
        int[] arr = Arrays
                .stream(scanner.nextLine().split("\\s+"))
                .mapToInt(Integer::parseInt)
                .toArray();

        return arr;
    }
}