package P03_Arrays;

import java.util.Arrays;
import java.util.Scanner;

public class CommonElements {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String[] arr1 = scanner.nextLine().split(" ");
        String[] arr2 = scanner.nextLine().split(" ");

        for (String el2 : arr2) {
            for (String el1 : arr1) {
                if (el2.equals(el1)) {
                    System.out.print(el2 + " ");
                    break;
                }
            }
        }
    }
}

// 100/100