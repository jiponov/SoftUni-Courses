package P02_MultidimensionalArrays;
// 100/100
// MATRIX

import java.util.Arrays;
import java.util.Scanner;

public class EXE_05_MatrixShuffling_01 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String dimensionsInput = scanner.nextLine();   // "3 4".split(" ") -> ["3", "4"]
        int rows = Integer.parseInt(dimensionsInput.split("\\s+")[0]);
        int cols = Integer.parseInt(dimensionsInput.split("\\s+")[1]);

        String[][] matrix = new String[rows][cols];

        // 1. попълваме матрицата с данни от конзолата
        fillMatrix(matrix, scanner);

        String command = scanner.nextLine();

        // better "something" in front of .equals, because NULL POINTER EXCEPTION may come!
        while (!"END".equals(command)) {
            // валидираме команда if true
            if (validateCommand(command, rows, cols)) {
                String[] commandParts = command.split("\\s+");
                // command = "swap 1 2 2 3"
                // "swap 1 2 2 3".split(" ") -> ["swap", "1", "2", "2", "3"]
                // SWAP - размяна на елемент[row1][col1] с елемент [row2][col2]

                // място, от което взимам първия елемент
                int row1Element = Integer.parseInt(commandParts[1]);   // ред, от който трябва да взема първия елемент
                int col1Element = Integer.parseInt(commandParts[2]);   // колона, от коята трябва да взема първия елемент

                // място, от което взимам втория  елемент
                int row2Element = Integer.parseInt(commandParts[3]);    // ред, от който трябва да взема втория елемент
                int col2Element = Integer.parseInt(commandParts[4]);    // колона, от коята трябва да взема втория елемент


                String firstElement = matrix[row1Element][col1Element];
                String secondElement = matrix[row2Element][col2Element];

                matrix[row1Element][col1Element] = secondElement;
                matrix[row2Element][col2Element] = firstElement;

                printMatrix(matrix);
            }
            // невалидна
            else {
                System.out.println("Invalid input!");
            }

            command = scanner.nextLine();
        }
    }

    private static void fillMatrix(String[][] matrix, Scanner scanner) {
        for (int row = 0; row < matrix.length; row++) {
            // scanner.nextLine() -> "1 2 3"
            // scanner.nextLine().split(" ") -> ["1", "2", "3"]
            matrix[row] = scanner.nextLine().split("\\s+");
        }
    }

    private static boolean validateCommand(String command, int rows, int cols) {
        // true -> ако командата е валидна
        // false -> ако командата не е валидна
        // command = "swap row1 col1 row2 col2"
        // "swap 1 3 4 6".split(" ") -> ["swap", "1", "3", "4", "6"]

        String[] commandTokens = command.split("\\s+");

        // 1. брой на параметрите / части на командата -> 5
        if (commandTokens.length != 5) {
            return false;
        }

        // 2. започва swap
        if (!"swap".equals(commandTokens[0])) {
            return false;
        }

        // 3. дали редовете и колоните дадени в командата ги има в матрицата
        int row1Element = Integer.parseInt(commandTokens[1]);   // >= 0 && < бр. редове
        int col1Element = Integer.parseInt(commandTokens[2]);   // >= 0 && < бр. колони
        int row2Element = Integer.parseInt(commandTokens[3]);   // >= 0 && < бр. редове
        int col2Element = Integer.parseInt(commandTokens[4]);   // >= 0 && < бр. колони

        // командата е валидна по всички параметри
        if (row1Element >= 0 && row1Element < rows && row2Element >= 0 && row2Element < rows && col1Element >= 0 && col1Element < cols && col2Element >= 0 && col2Element < cols) {
            return true;
        }

        // ако не е валидна командата:
        return false;
    }

    private static void printMatrix(String[][] matrix) {
        for (int row = 0; row < matrix.length; row++) {
            for (int col = 0; col < matrix[0].length; col++) {

                System.out.print(matrix[row][col] + " ");
            }

            System.out.println(); // свали курсора на следващия ред
        }
    }
}


/*
вариант 2:

 if (row1Element < 0 || row1Element >= rows
                    || row2Element < 0 || row2Element >= rows
                    || col1Element < 0 || col1Element >= cols
                    || col2Element < 0 || col2Element >= cols) {

                return false;
            }

*/