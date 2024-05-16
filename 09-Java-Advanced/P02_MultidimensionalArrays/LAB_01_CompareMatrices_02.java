package P02_MultidimensionalArrays;
// 100/100
// MATRIX

import java.util.Arrays;
import java.util.Scanner;

public class LAB_01_CompareMatrices_02 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int[][] matrixOne = getMatrix(scanner);
        int[][] matrixTwo = getMatrix(scanner);

        boolean areEqualMatrices = matrixOne.length == matrixTwo.length;

        boolean areEqualArrays = false;

        if (areEqualMatrices) {
            for (int arrays = 0; arrays < matrixOne.length; arrays++) {
                int[] arrOne = matrixOne[arrays];
                int[] arrTwo = matrixTwo[arrays];

                areEqualArrays = arrOne.length == arrTwo.length;
                if (areEqualArrays) {
                    for (int i = 0; i < arrOne.length; i++) {
                        if (arrOne[i] != arrTwo[i]) {
                            areEqualArrays = false;
                            break;
                        } else {
                            areEqualArrays = true;
                        }
                    }
                }
            }
        }

        String output;

        if (areEqualMatrices && areEqualArrays) {
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

        for (int i = 0; i < arrays; i++) {
            int[] arr = readArray(scanner);

            matrix[i] = arr;
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