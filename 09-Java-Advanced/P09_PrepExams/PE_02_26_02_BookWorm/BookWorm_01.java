package P09_PrepExams.PE_02_26_02_BookWorm;
// 100/100

import java.util.Scanner;

public class BookWorm_01 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // първоначалния текст
        String word = scanner.nextLine();

        // размер на матрицата: бр. редове = бр. колоните = size
        int size = Integer.parseInt(scanner.nextLine());


        String[][] matrix = new String[size][size];
        // подаваме му на метода fillMatrix КОЯ е МАТРИЦАТА и СКЕНЕРА
        // този метод fillMatrix обхожда редовете от конзолата и ПЪЛНИ матрицата
        fillMatrix(matrix, scanner);


        // НАМИРАМЕ МЕСТОПОЛОЖЕНИЕТО на ИГРАЧА
        int positionPlayerRow = -1;   // на кой ред се намира играча
        int positionPlayerCol = -1;   // на коя колона се намира играча


        for (int row = 0; row < size; row++) {
            for (int col = 0; col < size; col++) {

                if (matrix[row][col].equals("P")) {
                    positionPlayerRow = row;
                    positionPlayerCol = col;
                }
            }
        }


        String command = scanner.nextLine();
        while (!command.equals("end")) {

            // ЗАПАЗВАМ ОТ КЪДЕ ТРЪГВАМ
            int startRow = positionPlayerRow;   // ред, от който тръгва
            int startCol = positionPlayerCol;   // колона, от която тръгва

            // преместване
            boolean isOutside = false;

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
                if (positionPlayerRow >= size) {   // OR:   if (positionPlayerRow > size -1) {
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
                if (positionPlayerCol >= size) {
                    positionPlayerCol--;
                    isOutside = true;
                }
            }


            // извършено движение  ->  вътре или отвън?
            // ПРОВЕРКА КАКВО ИМА НА МЯСТОТО КЪДЕТО Е ОТИШЪЛ, само ако не е извън матрицата
            if (!isOutside) {
                // текстът, който е на мястото, на което отива
                String currentText = matrix[positionPlayerRow][positionPlayerCol];

                if (!currentText.equals("-")) {
                    // имаме буква значи
                    word = word + currentText;
                }

                // МЯСТОТО, на което си се ПРЕМЕСТИЛ
                matrix[positionPlayerRow][positionPlayerCol] = "P";
                // МЯСТОТО, от което си СТАРТИРАЛ
                matrix[startRow][startCol] = "-";

            } else {
                if (word.length() > 0) {
                    // премахвам неговата последна буква
                    word = word.substring(0, word.length() - 1);
                }
            }


            command = scanner.nextLine();
        }


        System.out.println(word);
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