package P07_Generics.EXE_02_GenericBoxOfInteger;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        Box<Integer> box = new Box<Integer>();

        int n = Integer.parseInt(scanner.nextLine());
        for (int i = 0; i < n; i++) {
            int number = Integer.parseInt(scanner.nextLine());
            //double number = Double.parseDouble(scanner.nextLine());

            box.add(number);
        }

//        String indexes = scanner.nextLine();
//        int swapIndex1 = Integer.parseInt(indexes.split("\\s+")[0]);
//        int swapIndex2 = Integer.parseInt(indexes.split("\\s+")[1]);
//        box.swap(swapIndex1, swapIndex2);

        //Double element = Double.parseDouble(scanner.nextLine());


        System.out.println(box);

    }
}
