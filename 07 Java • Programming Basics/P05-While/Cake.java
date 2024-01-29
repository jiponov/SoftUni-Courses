import java.util.Scanner;
//100/100
public class Cake {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int length = Integer.parseInt(scanner.nextLine());
        int width = Integer.parseInt(scanner.nextLine());
        int cakePieces = length * width;
        String pieces = "";

        while (cakePieces >= 0) {
            pieces = scanner.nextLine();

            if (pieces.equals("STOP")) {
                break;
            } else {
                cakePieces -= Integer.parseInt(pieces);
            }
        }

        if (cakePieces < 0) {
            System.out.printf("No more cake left! You need %d pieces more.", Math.abs(cakePieces));
        }
        if (pieces.equals("STOP")) {
            System.out.printf("%d pieces are left.", cakePieces);
        }
    }
}
