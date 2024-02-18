package P02_DataType;

import java.util.Scanner;

public class LowerOrUpper {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        char symbol = scanner.nextLine().charAt(0);

        // ascii код на въведения символ
        int code = (int) symbol;
        if (code >= 97 && code <= 122) {
            // малка буква - код: [97; 122]
            System.out.println("lower-case");
        } else if (code >= 65 && code <= 90) {
            // голяма буква - код: [65; 90]
            System.out.println("upper-case");
        }

        /* OR:
        if (Character.isUpperCase(symbol)) {
            // главна буква
            System.out.println("upper-case");
        } else {
            // малка буква
            System.out.println("lower-case");
        }
        */
    }
}

// 100/100