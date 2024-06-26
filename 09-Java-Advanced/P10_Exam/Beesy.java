// 100/100 Checked with Judge

import java.util.Scanner;

public class Beesy {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        int size = Integer.parseInt(scanner.nextLine());
        String[][] matrix = new String[size][size];

        createMatrix(matrix, scanner);

        int beeRow = -1;
        int beeCol = -1;

        for (int row = 0; row < size; row++) {
            for (int col = 0; col < size; col++) {

                if (matrix[row][col].equals("B")) {
                    beeRow = row;
                    beeCol = col;
                }
            }
        }

        boolean outOfEnergy = false;
        boolean reachedHive = false;
        boolean success30AndMore = false;
        boolean restorationOnceEnergy = false;

        int energy = 15;
        int collectedNectar = 0;


        while (scanner.hasNextLine()) {

            String command = scanner.nextLine();
            if (command.isEmpty()) {
                break;
            }


            int turnStartFromRow = beeRow;
            int turnStartFromCol = beeCol;

            energy--;

            if (command.equals("up")) {

                beeRow--;

                if (beeRow < 0) {
                    beeRow = size - 1;
                }

            } else if (command.equals("down")) {

                beeRow++;

                if (beeRow >= size) {
                    beeRow = 0;
                }

            } else if (command.equals("left")) {

                beeCol--;

                if (beeCol < 0) {
                    beeCol = size - 1;
                }

            } else if (command.equals("right")) {

                beeCol++;

                if (beeCol >= size) {
                    beeCol = 0;
                }
            }


            String symbolFound = matrix[beeRow][beeCol];

            if (symbolFound.equals("-")) {
                matrix[turnStartFromRow][turnStartFromCol] = "-";
                matrix[beeRow][beeCol] = "B";

            } else if (symbolFound.equals("H")) {
                matrix[turnStartFromRow][turnStartFromCol] = "-";
                matrix[beeRow][beeCol] = "B";

                reachedHive = true;

                break;

            } else if (symbolFound.equals("0") || symbolFound.equals("1") || symbolFound.equals("2") || symbolFound.equals("3") || symbolFound.equals("4") || symbolFound.equals("5") || symbolFound.equals("6") || symbolFound.equals("7") || symbolFound.equals("8") || symbolFound.equals("9")) {
                int digitFound = Integer.parseInt(symbolFound);
                collectedNectar += digitFound;

                if (collectedNectar >= 30) {
                    success30AndMore = true;
                }

                matrix[turnStartFromRow][turnStartFromCol] = "-";
                matrix[beeRow][beeCol] = "B";
            }


            if (collectedNectar < 30 && energy <= 0) {
                outOfEnergy = true;
                success30AndMore = false;

                break;
            }

            if (collectedNectar >= 30 && energy <= 0) {

                if (!restorationOnceEnergy) {
                    int restoredDiff = collectedNectar - 30;
                    energy += restoredDiff;
                    collectedNectar = 30;
                    restorationOnceEnergy = true;

                    success30AndMore = true;

                    if (energy <= 0) {
                        outOfEnergy = true;

                        break;
                    }

                } else {
                    outOfEnergy = true;
                    success30AndMore = true;

                    break;
                }
            }

        }


        if (success30AndMore && reachedHive) {
            System.out.printf("Great job, Beesy! The hive is full. Energy left: %d\n", energy);
        }

        if (!success30AndMore && reachedHive) {
            System.out.printf("Beesy did not manage to collect enough nectar.\n");
        }

        if (outOfEnergy && !reachedHive) {
            System.out.printf("This is the end! Beesy ran out of energy.\n");
        }


        printMatrix(matrix);
    }


    private static void createMatrix(String[][] matrix, Scanner scanner) {

        for (int row = 0; row <= matrix.length - 1; row++) {

            matrix[row] = scanner.nextLine().split("");
        }
    }

    private static void printMatrix(String[][] matrix) {

        for (int row = 0; row < matrix.length; row++) {
            for (int col = 0; col < matrix.length; col++) {

                System.out.print(matrix[row][col]);
            }

            System.out.println();
        }
    }
}