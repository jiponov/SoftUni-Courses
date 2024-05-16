package P02_MultidimensionalArrays;
// 100/100
// MATRIX

import java.util.*;

public class LAB_03_IntersectionOfTwoMatrices_01 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int rows = Integer.parseInt(scanner.nextLine());
        int cols = Integer.parseInt(scanner.nextLine());

        char[][] matrix1 = new char[rows][cols];
        char[][] matrix2 = new char[rows][cols];

        Map<Integer, List<Character>> map = new LinkedHashMap<>();


        for (int row = 0; row < rows; row++) {
            String line = scanner.nextLine().replaceAll(" ", "");
            matrix1[row] = line.toCharArray();
        }

        for (int row = 0; row < rows; row++) {
            String line = scanner.nextLine().replaceAll(" ", "");
            matrix2[row] = line.toCharArray();
        }


        for (int r = 0; r < matrix1.length; r++) {   // matrix1 = matrix2, няма значение за .length коя от двете
            // prints the current row in the matrix
            for (int c = 0; c < matrix1[r].length; c++) {
                char currentSymbol = '\0';

                if (matrix1[r][c] == matrix2[r][c]) {
                    currentSymbol = matrix1[r][c];
                } else {
                    currentSymbol = '*';
                }

                if (!map.containsKey(r)) {
                    map.put(r, new ArrayList<>());
                }

                map.get(r).add(currentSymbol);
            }
        }


        if (!map.isEmpty()) {

            for (Map.Entry<Integer, List<Character>> entry : map.entrySet()) {
                // Get the list of characters
                List<Character> characters = entry.getValue();
                // Initialize an empty string to build the output
                String outputLine = "";
                // Concatenate each character to the output string
                for (Character ch : characters) {
                    outputLine += ch + " ";
                }
                // Print the result after trimming the trailing space
                System.out.println(outputLine.trim());
            }
        }
    }
}