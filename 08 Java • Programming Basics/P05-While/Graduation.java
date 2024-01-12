import java.util.Scanner;

public class Graduation {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String student = scanner.nextLine();
        int badGradesCounter = 0;
        double grades = 0.0;
        int rank = 0;

        while (rank < 12) {
            double currentGrade = Double.parseDouble(scanner.nextLine());

            if (currentGrade < 4) {
                badGradesCounter++;
                if (badGradesCounter == 2) {
                    ++rank;
                    System.out.printf("%s has been excluded at %d grade", student, rank);
                    break;
                }

                continue;
            }

            rank++;
            grades += currentGrade;
        }

        if (rank == 12) {
            System.out.printf("%s graduated. Average grade: %.2f", student, grades / 12);
        }
    }
}