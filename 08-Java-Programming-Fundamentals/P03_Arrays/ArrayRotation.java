package P03_Arrays;

import java.util.Arrays;
import java.util.Scanner;

public class ArrayRotation {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int[] array = Arrays
                .stream(scanner.nextLine().split(" "))
                .mapToInt(e -> Integer.parseInt(e))
                .toArray();

        int n = Integer.parseInt(scanner.nextLine());

        for (int rotation = 0; rotation < n; rotation++) {
            // ЗАПАЗВАМЕ 1-ви елемент от масива взимаме на КОНКРЕТНАТА РОТАЦИЯ
            int firstElement = array[0];

            // Обхождаме СЪЩИЯ МАСИВ и ПРЕМЕСТВАМЕ елементите наляво, БЕЗ ПОСЛЕДНА позиция.
            // ПОСЛЕДНАТА позиция - поставяме 1-ви елемент там; следващата операция...
            for (int i = 0; i < array.length - 1; i++) {
                array[i] = array[i + 1];
            }

            // Поставяме 1-ви елемент на ПОСЛЕДНА позиция
            array[array.length - 1] = firstElement;
        }

        for (int el : array) {
            System.out.print(el + " ");
        }
    }
}

// 100/100