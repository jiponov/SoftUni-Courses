package P09_PrepExams.PE_08_03_02_TheGambler;
// 100/100

import java.util.Scanner;

public class TheGambler_01 {
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

                if (matrix[row][col].equals("G")) {
                    positionPlayerRow = row;
                    positionPlayerCol = col;
                }
            }
        }

        int money = 100;
        boolean isOutside = false;
        boolean hasWon = false;

        String command = scanner.nextLine();
        while (!command.equals("end")) {

            // ЗАПАЗВАМ ОТ КЪДЕ ТРЪГВАМ
            int startSavedPosRow = positionPlayerRow;   // ред, от който тръгва
            int startSavedPosCol = positionPlayerCol;   // колона, от която тръгва


            // command = "up", "down", "left", "right"
            if (command.equals("up")) {   // нагоре

                positionPlayerRow--;

                // проверка дали сме отвън
                if (positionPlayerRow < 0) {
                    positionPlayerRow++;
                    isOutside = true;
                }


            } else if (command.equals("down")) {   // надолу

                positionPlayerRow++;

                // проверка дали сме отвън
                if (positionPlayerRow >= sizeMatrix) {   // OR:   if (positionPlayerRow > size -1) {
                    positionPlayerRow--;
                    isOutside = true;
                }


            } else if (command.equals("left")) {   // ляво

                positionPlayerCol--;

                // проверка дали сме отвън
                if (positionPlayerCol < 0) {
                    positionPlayerCol++;
                    isOutside = true;
                }


            } else if (command.equals("right")) {   // дясно

                positionPlayerCol++;

                // проверка дали сме отвън
                if (positionPlayerCol >= sizeMatrix) {
                    positionPlayerCol--;
                    isOutside = true;
                }
            }


            // ПРОВЕРКА КАКВО ИМА НА МЯСТОТО КЪДЕТО Е ОТИШЪЛ
            String currentText = matrix[positionPlayerRow][positionPlayerCol];

            if (isOutside) {
                break;
            }

            if (currentText.equals("-")) {
                // МЯСТОТО, от което си СТАРТИРАЛ
                matrix[startSavedPosRow][startSavedPosCol] = "-";

                // МЯСТОТО, на което си се ПРЕМЕСТИЛ
                matrix[positionPlayerRow][positionPlayerCol] = "G";

                command = scanner.nextLine();
                continue;

            } else if (currentText.equals("W")) {
                // МЯСТОТО, от което си СТАРТИРАЛ
                matrix[startSavedPosRow][startSavedPosCol] = "-";

                // МЯСТОТО, на което си се ПРЕМЕСТИЛ
                matrix[positionPlayerRow][positionPlayerCol] = "G";

                money += 100;

            } else if (currentText.equals("P")) {
                // МЯСТОТО, от което си СТАРТИРАЛ
                matrix[startSavedPosRow][startSavedPosCol] = "-";

                // МЯСТОТО, на което си се ПРЕМЕСТИЛ
                matrix[positionPlayerRow][positionPlayerCol] = "G";

                money -= 200;

            } else if (currentText.equals("J")) {
                // МЯСТОТО, от което си СТАРТИРАЛ
                matrix[startSavedPosRow][startSavedPosCol] = "-";

                // МЯСТОТО, на което си се ПРЕМЕСТИЛ
                matrix[positionPlayerRow][positionPlayerCol] = "G";

                money += 100000;
                hasWon = true;
                break;

            }

            if (money <= 0) {
                break;
            }

            command = scanner.nextLine();
        }


        if (hasWon && money > 0) {
            System.out.println("You win the Jackpot!");
            System.out.printf("End of the game. Total amount: %d$\n", money);
            printMatrix(matrix);
        } else if (!hasWon && money > 0) {
            System.out.printf("End of the game. Total amount: %d$\n", money);
            printMatrix(matrix);
        } else if (isOutside || money <= 0) {
            System.out.printf("Game over! You lost everything!\n");
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