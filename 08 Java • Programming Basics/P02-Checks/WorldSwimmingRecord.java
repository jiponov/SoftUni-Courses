// 100/100
import java.util.Scanner;

public class WorldSwimmingRecord {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double worldRecord = Double.parseDouble(scanner.nextLine());
        double distance = Double.parseDouble(scanner.nextLine());
        double time1M = Double.parseDouble(scanner.nextLine());

        double distanceRecord = distance * time1M;
        double waterTime = Math.floor(distance / 15) * 12.5;
        double time = distanceRecord + waterTime;

        double difference = Math.abs(time - worldRecord);

        if (time >= worldRecord) {
            System.out.printf("No, he failed! He was %.2f seconds slower.", difference);
        } else {
            System.out.printf("Yes, he succeeded! The new world record is %.2f seconds.", time);
        }
    }
}