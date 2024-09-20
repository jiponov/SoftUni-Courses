package P01_WorkingWithAbstraction;
// 100/100
import java.util.Scanner;

public class LAB_01_RhombusOfStars_02 {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        int n = Integer.parseInt(scanner.nextLine());

        printTopPart(n);

        printMiddlePart(n);

        printBottomPart(n);
    }


    private static void printTopPart(int n) {
        // ГОРНА ЧАСТ
        // бр. редове = n - 1
        for (int row = 1; row <= n - 1; row++) {
            printRow(n, row);    // принтирам ред
        }
    }

    private static void printMiddlePart(int n) {
        // СРЕДНА ЧАСТ
        // 1 ред  -> n = бр.звезди
        for (int star = 1; star <= n; star++) {
            System.out.print("* ");
        }

        System.out.println();
    }

    private static void printBottomPart(int n) {
        // ДОЛНА ЧАСТ
        for (int row = n - 1; row >= 1; row--) {
            printRow(n, row);    // принтирам ред
        }
    }


    private static void printRow(int n, int row) {
        // всеки ред  ->  {брой интервали = n - row}{бр. звезди = row}
        // n = 3
        // 1 ред  ->  2 инт + 1 зв.
        // 2 ред  ->  1 инт + 2 зв.

        for (int space = 1; space <= n - row; space++) {
            System.out.print(" ");
        }

        for (int star = 1; star <= row; star++) {
            System.out.print("* ");
        }

        System.out.println();
    }
}