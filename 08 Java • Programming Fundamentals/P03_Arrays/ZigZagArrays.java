package P03_Arrays;

import java.util.Scanner;

public class ZigZagArrays {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int n = Integer.parseInt(scanner.nextLine());

        String[] firstArray = new String[n];
        String[] secondArray = new String[n];

        int positionIndex = 0;

        for (int row = 1; row <= n; row++) {

            String[] lineArr = scanner.nextLine().split(" ");

            String el1 = lineArr[0];
            String el2 = lineArr[1];

            if (row % 2 != 0) {
                firstArray[positionIndex] = el1;
                secondArray[positionIndex] = el2;
            } else {
                firstArray[positionIndex] = el2;
                secondArray[positionIndex] = el1;
            }

            positionIndex++;
        }

        for (String el : firstArray) {
            System.out.print(el + " ");
        }

        System.out.println();

        for (String el : secondArray) {
            System.out.print(el + " ");
        }
    }
}

// 100/100