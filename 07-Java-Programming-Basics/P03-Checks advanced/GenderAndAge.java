// 100/100
import java.util.Scanner;

public class GenderAndAge {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String output = "";
        double age = Double.parseDouble(scanner.nextLine());
        String gender = scanner.nextLine();

        if (age >= 16) {
            if (gender.equals("m")) {
                output = "Mr.";
            } else {
                output = "Ms.";
            }
        } else if (age < 16) {
            if (gender.equals("m")) {
                output = "Master";
            } else {
                output = "Miss";
            }
        }

        System.out.println(output);
    }
}
