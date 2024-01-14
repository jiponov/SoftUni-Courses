import java.util.Scanner;

public class TrainTheTrainers {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int n = Integer.parseInt(scanner.nextLine());
        String presentation = scanner.nextLine();
        double finalAvarage = 0;
        double nSum = 0;
        double gradeSumTotal = 0;

        while (!presentation.equals("Finish")) {
            double gradeSum = 0;
            double avarage = 0;

            for (int gradeNum = 1; gradeNum <= n; gradeNum++) {
                double grade = Double.parseDouble(scanner.nextLine());
                gradeSum += grade;
                nSum++;
                gradeSumTotal += grade;

                if (gradeNum == n) {
                    avarage = gradeSum / n;
                    System.out.printf("%s - %.2f.%n", presentation, avarage);
                }
            }

            presentation = scanner.nextLine();

            if (presentation.equals("Finish")) {
                finalAvarage = gradeSumTotal / nSum;
                System.out.printf("Student's final assessment is %.2f.", finalAvarage);
                break;
            }
        }
    }
}

//100/100
