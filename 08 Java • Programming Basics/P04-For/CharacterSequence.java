import java.util.Scanner;

public class CharacterSequence {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String input = scanner.nextLine();
        int length = input.length();
        //System.out.println(length);

        for (int i = 0; i < input.length(); i++) {
            char letter = input.charAt(i);
            System.out.println(letter);
        }
    }
}

// 100/100
