package P01_Basic;

import java.util.Scanner;

public class Login {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String username = scanner.nextLine();
        String password = "";
        boolean flag = false;
        int counter = 0;
        String input = scanner.nextLine();

        // reversed username for real password
        for (int i = username.length() - 1; i >= 0; i--) {
            char letter = username.charAt(i);
            password += letter;
        }

        while (flag == false) {       // OR:  (!flag) OR: (!input.equals(password))
            String match = "";

            // try input
            match = input;

            // check for match
            if (password.equals(match)) {
                System.out.printf("User %s logged in.", username);
                flag = true;
                counter++;
                return;
            } else {
                flag = false;
                counter++;
                match = "";

                if (counter == 4) {
                    System.out.printf("User %s blocked!", username);
                    return;
                }

                System.out.println("Incorrect password. Try again.");
            }

            input = scanner.nextLine();
        }
    }
}

// 100/100


/*

                for (int i = 0; i <= input.length() - 1; i++) {
                char letter = input.charAt(i);
                output += letter;
                }

 */
