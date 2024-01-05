// 100/100

import java.util.Scanner;

public class InchesToCm {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        // inch -> import
        // cm = inch * 2.54
        // print
        double inches = Double.parseDouble(scanner.nextLine());
        double cm = inches * 2.54;

        System.out.println(cm);
    }
}



