package P02_MultidimensionalArrays;
// 100/100
// MATRIX

import java.util.Arrays;
import java.util.Scanner;

public class EXE_05_MatrixShuffling_02 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int[] dimensions = Arrays.stream(scanner.nextLine().split(" "))
                .mapToInt(Integer::parseInt)
                .toArray(); //[4, 5]
        int rows = dimensions[0]; //брой редове
        int cols = dimensions[1]; //брой колони

        String[][] matrix = new String[rows][cols];

        fillMatrix(matrix, scanner);

        String command = scanner.nextLine();

        while (!"END".equals(command)) {
            //command = "swap 1 2 2 3".split(" ") -> ["swap", "1", "2", "2", "3"]
            //размяна на елемент[1][2] с елемент[2][3]
            String[] commandParts = command.split("\\s+"); //["swap", "1", "2", "2", "3"]

            //валидираме командата
            if (validateCommand(commandParts, rows, cols)) {
                int rowFirstElement = Integer.parseInt(commandParts[1]); //ред на първия елемент
                int colFirstElement = Integer.parseInt(commandParts[2]); //колона на първия елемент

                int rowSecondElement = Integer.parseInt(commandParts[3]); //ред на втория елемент
                int colSecondElement = Integer.parseInt(commandParts[4]); //колона на втория елемент

                String firstElement = matrix[rowFirstElement][colFirstElement]; //първия елемент за размяна
                String secondElement = matrix[rowSecondElement][colSecondElement]; //втория елемент за размяна

                //размяна
                matrix[rowFirstElement][colFirstElement] = secondElement;
                matrix[rowSecondElement][colSecondElement] = firstElement;

                //отпечаваме матрицата с разменени елементи
                printMatrix(matrix);

            } else {
                System.out.println("Invalid input!");
            }

            command = scanner.nextLine();
        }
    }

    //true -> ако командата е валидна
    //false -> ако командата не е валидна
    private static boolean validateCommand(String[] commandParts, int rows, int cols) {
        //command = "swap 1 2 2 3".split(" ") -> commandParts = ["swap", "1", "2", "2", "3"]
        //1. брой на частите на командата
        if (commandParts.length != 5) {
            return false;
        }

        //2. започва с думата swap
        if (!"swap".equals(commandParts[0])) {
            return false;
        }

        //3. дали редовете и колоните са валидни
        int rowFirstElement = Integer.parseInt(commandParts[1]); //ред на първия елемент -> >= 0 и < бр.редове
        int colFirstElement = Integer.parseInt(commandParts[2]); //колона на първия елемент -> >= 0 и < бр. колони
        int rowSecondElement = Integer.parseInt(commandParts[3]); //ред на втория елемент -> >= 0 и < бр.редове
        int colSecondElement = Integer.parseInt(commandParts[4]); //колона на втория елемент -> >= 0 и < бр. колони

        if (rowFirstElement >= 0 && rowFirstElement < rows && rowSecondElement >= 0 && rowSecondElement < rows
                && colFirstElement >= 0 && colFirstElement < cols && colSecondElement >= 0 && colSecondElement < cols) {
            //валидни редове и колони
            return true;
        } else {
            //невалидни редове и колони
            return false;
        }
    }

    private static void printMatrix(String[][] matrix) {
        for (String[] row : matrix) {
            for (String element : row) {
                System.out.print(element + " ");
            }
            System.out.println();
        }
    }

    private static void fillMatrix(String[][] matrix, Scanner scanner) {
        for (int row = 0; row < matrix.length; row++) {
            matrix[row] = scanner.nextLine().split("\\s+");
        }
    }
}