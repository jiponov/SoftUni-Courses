package P09_PrepExams.PE_02_26_02_BookWorm;
// 100/100
import java.util.Scanner;

public class BookWorm_02 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // първоначалния текст
        String startText = scanner.nextLine();

        StringBuilder textBuilder = new StringBuilder(startText);

        // размер на матрицата: бр. редове = бр. колоните = size
        int size = Integer.parseInt(scanner.nextLine());

        String[][] matrix = new String[size][size];
        fillMatrix(matrix, scanner);

        // намираме местоположението на играча
        int playerRow = -1;   // на кой ред се намира играча
        int playerCol = -1;   // на коя колона се намира играча


        for (int row = 0; row < size; row++) {
            for (int col = 0; col < size; col++) {

                if (matrix[row][col].equals("P")) {
                    playerRow = row;
                    playerCol = col;
                }
            }
        }


        String command = scanner.nextLine();
        while (!command.equals("end")) {
            // запазвам от къде тръгвам
            int startRow = playerRow;   // ред, от който тръгва
            int startCol = playerCol;   // колона, от която тръгва

            // command = "up", "down", "left", "right"
            // преместване
            boolean isOutside = false;

            if (command.equals("up")) {   // нагоре
                playerRow--;
                // проверка дали сме отвън
                if (playerRow < 0) {
                    playerRow++;
                    isOutside = true;
                }

            } else if (command.equals("down")) {//надолу
                playerRow++;
                //проверка дали сме отвън
                if (playerRow >= size) {
                    playerRow--;
                    isOutside = true;
                }

            } else if (command.equals("left")) {//ляво
                playerCol--;
                //проверка дали сме отвън
                if (playerCol < 0) {
                    playerCol++;
                    isOutside = true;
                }

            } else if (command.equals("right")) {//дясно
                playerCol++;
                //проверка дали сме отвън
                if (playerCol >= size) {
                    playerCol--;
                    isOutside = true;
                }
            }


            // извършено движение -> вътре или отвън
            // проверка какво има на мястото където е отишъл, само ако не е извън
            if (!isOutside) {
                String currentText = matrix[playerRow][playerCol];   // текстът, който е на мястото, на което отива
                if (!currentText.equals("-")) {
                    // буква
                    textBuilder.append(currentText);
                }

                matrix[playerRow][playerCol] = "P";   // мястото, на което се е преместил
                matrix[startRow][startCol] = "-";     // мястото, от което си тръгнал

            } else {
                if (textBuilder.length() > 0) {
                    // премахвам неговата последна буква
                    textBuilder.deleteCharAt(textBuilder.length() - 1);
                }
            }


            command = scanner.nextLine();
        }


        System.out.println(textBuilder);
        printMatrix(matrix);
    }

    private static void printMatrix(String[][] matrix) {
        for (int row = 0; row < matrix.length; row++) {
            for (int col = 0; col < matrix.length; col++) {

                System.out.print(matrix[row][col]);
            }

            System.out.println();   // преминаваме на нов ред
        }
    }

    private static void fillMatrix(String[][] matrix, Scanner scanner) {
        // бр. редове = matrix.length
        // бр. колони = matrix.length

        for (int row = 0; row <= matrix.length - 1; row++) {
            matrix[row] = scanner.nextLine().split("");
        }
    }

}