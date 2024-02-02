package P03_Arrays;

import java.util.Arrays;
import java.util.Scanner;

public class demoP01 {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        // String Array
        String[] strings = new String[]{"one", "two", "three"};
        System.out.println(String.join(" ", strings));

        // int Array
        int[] numbers = new int[]{1, 2, 3};
        Arrays.stream(numbers).forEach(x -> System.out.print(x + " "));

        System.out.println();
        System.out.println(Arrays.toString(numbers));
    }
}
