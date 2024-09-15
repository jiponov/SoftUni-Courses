package P09_PrepExams.PE_11_04_02_FishingCompetition;
// 100/100

import java.util.Scanner;

public class FishingCompetition_01 {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        int sizeMatrix = Integer.parseInt(scanner.nextLine());
        String[][] matrix = new String[sizeMatrix][sizeMatrix];

        fillMatrix(matrix, scanner);

        // НАМИРАМЕ МЕСТОПОЛОЖЕНИЕТО на ИГРАЧА
        int positionPlayerRow = -1;   // на кой ред се намира играча
        int positionPlayerCol = -1;   // на коя колона се намира играча

        for (int row = 0; row < sizeMatrix; row++) {
            for (int col = 0; col < sizeMatrix; col++) {

                if (matrix[row][col].equals("S")) {
                    positionPlayerRow = row;
                    positionPlayerCol = col;
                }
            }
        }


        boolean shipSinks = false;
        boolean success20AndMore = false;
        int fishes = 0;


        String command = scanner.nextLine();
        while (!command.equals("collect the nets")) {

            // ЗАПАЗВАМ ОТ КЪДЕ ТРЪГВАМ
            int startSavedPosRow = positionPlayerRow;   // ред, от който тръгва
            int startSavedPosCol = positionPlayerCol;   // колона, от която тръгва


            // command = "up", "down", "left", "right"
            if (command.equals("up")) {   // нагоре

                positionPlayerRow--;

                // проверка дали сме отвън
                if (positionPlayerRow < 0) {
                    positionPlayerRow = sizeMatrix - 1;
                }

            } else if (command.equals("down")) {   // надолу

                positionPlayerRow++;

                // проверка дали сме отвън
                if (positionPlayerRow >= sizeMatrix) {   // OR:   if (positionPlayerRow > size -1) {
                    positionPlayerRow = 0;
                }

            } else if (command.equals("left")) {   // ляво

                positionPlayerCol--;

                // проверка дали сме отвън
                if (positionPlayerCol < 0) {
                    positionPlayerCol = sizeMatrix - 1;
                }

            } else if (command.equals("right")) {   // дясно

                positionPlayerCol++;

                // проверка дали сме отвън
                if (positionPlayerCol >= sizeMatrix) {
                    positionPlayerCol = 0;
                }
            }


            // ПРОВЕРКА КАКВО ИМА НА МЯСТОТО КЪДЕТО Е ОТИШЪЛ
            String textFound = matrix[positionPlayerRow][positionPlayerCol];

            if (textFound.equals("-")) {
                // МЯСТОТО, от което си СТАРТИРАЛ
                matrix[startSavedPosRow][startSavedPosCol] = "-";

                // МЯСТОТО, на което си се ПРЕМЕСТИЛ
                matrix[positionPlayerRow][positionPlayerCol] = "S";

                command = scanner.nextLine();
                continue;

            } else if (textFound.equals("W")) {
                // МЯСТОТО, от което си СТАРТИРАЛ
                matrix[startSavedPosRow][startSavedPosCol] = "-";

                // МЯСТОТО, на което си се ПРЕМЕСТИЛ
                matrix[positionPlayerRow][positionPlayerCol] = "S";

                fishes = 0;
                shipSinks = true;
                break;

            } else if (textFound.equals("1") || textFound.equals("2") || textFound.equals("3") || textFound.equals("4") || textFound.equals("5") || textFound.equals("6") || textFound.equals("7") || textFound.equals("8") || textFound.equals("9")) {
                int digitFound = Integer.parseInt(textFound);
                fishes += digitFound;

                if (fishes >= 20) {
                    success20AndMore = true;
                }

                // МЯСТОТО, от което си СТАРТИРАЛ
                matrix[startSavedPosRow][startSavedPosCol] = "-";

                // МЯСТОТО, на което си се ПРЕМЕСТИЛ
                matrix[positionPlayerRow][positionPlayerCol] = "S";
            }

            command = scanner.nextLine();
        }


        if (shipSinks) {
            System.out.printf("You fell into a whirlpool! The ship sank and you lost the fish you caught. Last coordinates of the ship: [%d,%d]\n", positionPlayerRow, positionPlayerCol);
            return;
        }

        if (success20AndMore) {
            System.out.println("Success! You managed to reach the quota!");
        } else {
            System.out.printf("You didn't catch enough fish and didn't reach the quota! You need %d tons of fish more.\n", 20 - fishes);
        }

        if (fishes > 0) {
            System.out.printf("Amount of fish caught: %d tons.\n", fishes);
        }

        if (!shipSinks) {
            printMatrix(matrix);
        }
    }


    private static void fillMatrix(String[][] matrix, Scanner scanner) {
        // бр. редове = matrix.length
        // бр. колони = matrix.length

        for (int row = 0; row <= matrix.length - 1; row++) {    // OR:   for (int row = 0; row < matrix.length; row++) {
            matrix[row] = scanner.nextLine().split("");
        }
    }

    private static void printMatrix(String[][] matrix) {

        for (int row = 0; row < matrix.length; row++) {
            for (int col = 0; col < matrix.length; col++) {

                System.out.print(matrix[row][col]);
            }

            System.out.println();   // преминаваме на нов ред
        }
    }
}