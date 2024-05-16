package P02_MultidimensionalArrays;

// 100/100
// MATRIX

import java.util.*;

public class LAB_02_PositionsOf_01 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int[][] matrix = getMatrix(scanner);
        int specialNumber = Integer.parseInt(scanner.nextLine());

        Map<Integer, List<Integer>> map = new LinkedHashMap<>();

        for (int array = 0; array < matrix.length; array++) {
            for (int i = 0; i < matrix[array].length; i++) {

                int currentElement = matrix[array][i];

                if (currentElement == specialNumber) {
                    if (!map.containsKey(array)) {
                        map.put(array, new ArrayList<>());
                    }

                    map.get(array).add(i);
                }
            }
        }

        if (!map.isEmpty()) {
            for (Map.Entry<Integer, List<Integer>> entry : map.entrySet()) {
                for (int value : entry.getValue()) {
                    System.out.println(entry.getKey() + " " + value);
                }
            }
        } else {
            System.out.println("not found");
        }
    }

    private static int[][] getMatrix(Scanner scanner) {
        int[] matrixDimensions = readArray(scanner);

        int arrays = matrixDimensions[0];
        int indices = matrixDimensions[1];

        int[][] matrix = new int[arrays][indices];

        for (int row = 0; row < matrix.length; row++) {
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