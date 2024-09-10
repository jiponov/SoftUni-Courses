package P09_PrepExams.PE_05_21_02_Selling;
// 100/100   - with char[][] matrix

import java.util.Scanner;
import java.util.*;

public class Selling_02 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int sizeMatrix = Integer.parseInt(scanner.nextLine());
        char[][] matrix = new char[sizeMatrix][sizeMatrix];

        fillMatrix(matrix, scanner);

        // НАМИРАМЕ МЕСТОПОЛОЖЕНИЕТО на ИГРАЧА
        int positionPlayerRow = -1;
        int positionPlayerCol = -1;

        int price = 0;

        for (int row = 0; row < sizeMatrix; row++) {
            for (int col = 0; col < sizeMatrix; col++) {

                if (matrix[row][col] == 'S') {
                    positionPlayerRow = row;
                    positionPlayerCol = col;
                }
            }
        }


        while (scanner.hasNextLine()) {     // OR:  while (price < 50 || isOutside)
            String command = scanner.nextLine();

            // ЗАПАЗВАМ ОТ КЪДЕ ТРЪГВАМ
            int startSavedPosRow = positionPlayerRow;
            int startSavedPosCol = positionPlayerCol;

            boolean isOutside = false;


            // Обработка на командите за движение
            if (command.equals("up")) {

                positionPlayerRow--;
                if (positionPlayerRow < 0) {
                    positionPlayerRow++;
                    isOutside = true;
                }

            } else if (command.equals("down")) {

                positionPlayerRow++;
                if (positionPlayerRow >= sizeMatrix) {
                    positionPlayerRow--;
                    isOutside = true;
                }

            } else if (command.equals("left")) {

                positionPlayerCol--;
                if (positionPlayerCol < 0) {
                    positionPlayerCol++;
                    isOutside = true;
                }

            } else if (command.equals("right")) {

                positionPlayerCol++;
                if (positionPlayerCol >= sizeMatrix) {
                    positionPlayerCol--;
                    isOutside = true;
                }
            }


            // ПРОВЕРКА КАКВО ИМА НА МЯСТОТО КЪДЕТО Е ОТИШЪЛ, само ако не е извън матрицата
            if (!isOutside) {
                // текстът, който е на мястото, на което отива
                char textFound = matrix[positionPlayerRow][positionPlayerCol];

                int pillarSavedPosRow = -1;
                int pillarSavedPosCol = -1;


                if (textFound == 'O') {

                    pillarSavedPosRow = positionPlayerRow;
                    pillarSavedPosCol = positionPlayerCol;

                    // МЯСТОТО, на което си се ПРЕМЕСТИЛ ,но го зануляваме заради намиране на другата буква O
                    matrix[positionPlayerRow][positionPlayerCol] = '-';

                    for (int row = 0; row < sizeMatrix; row++) {
                        for (int col = 0; col < sizeMatrix; col++) {

                            if (matrix[row][col] == 'O') {
                                positionPlayerRow = row;
                                positionPlayerCol = col;
                            }
                        }
                    }

                    // МЯСТОТО, от което си СТАРТИРАЛ
                    matrix[startSavedPosRow][startSavedPosCol] = '-';

                    // МЯСТОТО, с ПЪРВИ PILLAR
                    matrix[pillarSavedPosRow][pillarSavedPosCol] = '-';

                    // МЯСТОТО, на което си се ПРЕМЕСТИЛ
                    matrix[positionPlayerRow][positionPlayerCol] = 'S';


                } else if (Character.isDigit(textFound)) {

                    int currentDigit = Character.getNumericValue(textFound);
                    price += currentDigit;

                    // МЯСТОТО, от което си СТАРТИРАЛ
                    matrix[startSavedPosRow][startSavedPosCol] = '-';

                    // МЯСТОТО, на което си се ПРЕМЕСТИЛ
                    matrix[positionPlayerRow][positionPlayerCol] = 'S';

                    if (price >= 50) {
                        System.out.println("Good news! You succeeded in collecting enough money!");
                        System.out.printf("Money: %d\n", price);
                        break;
                    }


                } else if (textFound == '-') {
                    // МЯСТОТО, от което си СТАРТИРАЛ
                    matrix[startSavedPosRow][startSavedPosCol] = '-';

                    // МЯСТОТО, на което си се ПРЕМЕСТИЛ
                    matrix[positionPlayerRow][positionPlayerCol] = 'S';
                }


            } else {
                matrix[startSavedPosRow][startSavedPosCol] = '-';

                System.out.println("Bad news, you are out of the bakery.");
                System.out.printf("Money: %d\n", price);
                break;
            }
        }


        printMatrix(matrix);
    }


    private static void fillMatrix(char[][] matrix, Scanner scanner) {

        for (int row = 0; row <= matrix.length - 1; row++) {
            String line = scanner.nextLine();
            for (int col = 0; col < matrix.length; col++) {
                matrix[row][col] = line.charAt(col);
            }
        }
    }

    private static void printMatrix(char[][] matrix) {
        for (int row = 0; row < matrix.length; row++) {
            for (int col = 0; col < matrix.length; col++) {

                System.out.print(matrix[row][col]);
            }

            System.out.println();
        }
    }

}


/*
В Java, матрицата String[][] може да съдържа всякакви текстови данни, включително и единични символи.
В случая, когато въвеждате символи от конзолата и ги записвате като String[][],
всяка клетка от матрицата ще съдържа единичен символ, представен като низ.
Ето защо няма грешка: когато въвеждате символи като 'S', '9', '8' и т.н.,
те автоматично се третират като низове с дължина 1, когато използвате метода split("") за запълване на матрицата.
Ако обаче желаете да работите със символи (char), можете да използвате char[][] вместо String[][].
*/
