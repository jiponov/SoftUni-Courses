// 100/100
import java.util.Scanner;

public class AnimalClass {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String animal = scanner.nextLine();
        String type;

        if (animal.equals("dog")) {
            type = "mammal";
        } else if (animal.equals("crocodile") || animal.equals("tortoise") || animal.equals("snake")) {
            type = "reptile";
        } else {
            type = "unknown";
        }

        System.out.println(type);
    }
}