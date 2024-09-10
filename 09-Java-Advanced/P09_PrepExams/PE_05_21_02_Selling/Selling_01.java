package P09_PrepExams.PE_05_21_02_Selling;
// 100/100   - with String[][] matrix

import java.util.Scanner;
import java.util.*;

public class Selling_01 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int sizeMatrix = Integer.parseInt(scanner.nextLine());
        String[][] matrix = new String[sizeMatrix][sizeMatrix];

        fillMatrix(matrix, scanner);

        // НАМИРАМЕ МЕСТОПОЛОЖЕНИЕТО на ИГРАЧА
        int positionPlayerRow = -1;   // на кой ред се намира играча
        int positionPlayerCol = -1;   // на коя колона се намира играча

        int price = 0;

        for (int row = 0; row < sizeMatrix; row++) {
            for (int col = 0; col < sizeMatrix; col++) {

                if (matrix[row][col].equals("S")) {
                    positionPlayerRow = row;
                    positionPlayerCol = col;
                }
            }
        }


        while (scanner.hasNextLine()) {     // OR:  while (price < 50 || isOutside)
            String command = scanner.nextLine();

            // ЗАПАЗВАМ ОТ КЪДЕ ТРЪГВАМ
            int startSavedPosRow = positionPlayerRow;   // ред, от който тръгва
            int startSavedPosCol = positionPlayerCol;   // колона, от която тръгва

            // преместване
            boolean isOutside = false;


            // command = "up", "down", "left", "right"
            if (command.equals("up")) {

                positionPlayerRow--;
                // проверка дали сме отвън
                if (positionPlayerRow < 0) {
                    positionPlayerRow++;
                    isOutside = true;
                }

            } else if (command.equals("down")) {

                positionPlayerRow++;
                // проверка дали сме отвън
                if (positionPlayerRow >= sizeMatrix) {   // OR:   if (positionPlayerRow > size -1) {
                    positionPlayerRow--;
                    isOutside = true;
                }

            } else if (command.equals("left")) {

                positionPlayerCol--;

                // проверка дали сме отвън
                if (positionPlayerCol < 0) {
                    positionPlayerCol++;
                    isOutside = true;
                }

            } else if (command.equals("right")) {

                positionPlayerCol++;
                // проверка дали сме отвън
                if (positionPlayerCol >= sizeMatrix) {
                    positionPlayerCol--;
                    isOutside = true;
                }
            }


            // ПРОВЕРКА КАКВО ИМА НА МЯСТОТО КЪДЕТО Е ОТИШЪЛ, само ако не е извън матрицата
            if (!isOutside) {    //  e false.
                // текстът, който е на мястото, на което отива
                String textFound = matrix[positionPlayerRow][positionPlayerCol];

                int pillarSavedPosRow = -1;    // 1-ви pillar "O" за row
                int pillarSavedPosCol = -1;    // 1-ви pillar "O" за col


                if (textFound.equals("O")) {

                    pillarSavedPosRow = positionPlayerRow;
                    pillarSavedPosCol = positionPlayerCol;

                    // МЯСТОТО, на което си се ПРЕМЕСТИЛ ,но го зануляваме заради намиране на другата буква O
                    matrix[positionPlayerRow][positionPlayerCol] = "-";

                    for (int row = 0; row < sizeMatrix; row++) {
                        for (int col = 0; col < sizeMatrix; col++) {

                            if (matrix[row][col].equals("O")) {
                                positionPlayerRow = row;
                                positionPlayerCol = col;
                            }
                        }
                    }

                    // МЯСТОТО, от което си СТАРТИРАЛ
                    matrix[startSavedPosRow][startSavedPosCol] = "-";

                    // МЯСТОТО, с ПЪРВИ PILLAR
                    matrix[pillarSavedPosRow][pillarSavedPosCol] = "-";

                    // МЯСТОТО, на което си се ПРЕМЕСТИЛ
                    matrix[positionPlayerRow][positionPlayerCol] = "S";


                } else if (textFound.equals("0") || textFound.equals("1") || textFound.equals("2") || textFound.equals("3") || textFound.equals("4") || textFound.equals("5") || textFound.equals("6") || textFound.equals("7") || textFound.equals("8") || textFound.equals("9")) {

                    int currentDigit = Integer.parseInt(textFound);
                    price += currentDigit;

                    // МЯСТОТО, от което си СТАРТИРАЛ
                    matrix[startSavedPosRow][startSavedPosCol] = "-";

                    // МЯСТОТО, на което си се ПРЕМЕСТИЛ
                    matrix[positionPlayerRow][positionPlayerCol] = "S";

                    if (price >= 50) {
                        System.out.println("Good news! You succeeded in collecting enough money!");
                        System.out.printf("Money: %d\n", price);
                        break;
                    }


                } else if (textFound.equals("-")) {
                    // МЯСТОТО, от което си СТАРТИРАЛ
                    matrix[startSavedPosRow][startSavedPosCol] = "-";

                    // МЯСТОТО, на което си се ПРЕМЕСТИЛ
                    matrix[positionPlayerRow][positionPlayerCol] = "S";
                }


            } else {
                matrix[startSavedPosRow][startSavedPosCol] = "-";

                System.out.println("Bad news, you are out of the bakery.");
                System.out.printf("Money: %d\n", price);
                break;
            }

        }


        printMatrix(matrix);
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