import java.util.Scanner;

public class ExamPreparation {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int poorGradesMax = Integer.parseInt(scanner.nextLine());
        String task = scanner.nextLine();
        String currentTask = "";

        int badGrades = 0;
        int sum = 0;
        int gradesCount = 0;


        while (!task.equals("Enough")) {
            int grade = Integer.parseInt(scanner.nextLine());
            sum += grade;
            gradesCount++;

            if (grade <= 4) {
                badGrades++;
                if (badGrades == poorGradesMax) {
                    break;
                }
            }

            currentTask = task;
            task = scanner.nextLine();
        }

        double averageScore = 1.0 * sum / gradesCount;

        String output = "";
        if (badGrades == poorGradesMax) {
            output = String.format("You need a break, %d poor grades.", badGrades);
        } else {
            output = String.format("Average score: %.2f%n" + "Number of problems: %d%n" + "Last problem: %s", averageScore, gradesCount, currentTask);
        }

        System.out.println(output);
    }
}

//100/100