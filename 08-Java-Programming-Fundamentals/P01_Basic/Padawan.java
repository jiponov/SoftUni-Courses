package P01_Basic;

import java.util.Scanner;

public class Padawan {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // входни данни
        double budget = Double.parseDouble(scanner.nextLine()); //бюджет за екипировка
        int studentsCount = Integer.parseInt(scanner.nextLine()); //брой ученици
        double priceSaber = Double.parseDouble(scanner.nextLine()); //цена за 1 меч
        double priceRobe = Double.parseDouble(scanner.nextLine()); //цена за 1 роба
        double priceBelt = Double.parseDouble(scanner.nextLine()); //цена за 1 колан

        // сума за мечове = Math.ceil(studentsCount + 10%) * цена за 1 меч (входни данни)
        double sumSabers = Math.ceil(1.10 * studentsCount) * priceSaber;

        // сума за роби =  studentsCount * цена за 1 роба (входни данни)
        double sumRobes = studentsCount * priceRobe;

        // сума за колани = (studentsCount - studentsCount / 6) * цена за 1 колан (входни данни)
        double sumBelts = (studentsCount - studentsCount / 6) * priceBelt;

        // обща сума за екипировка = сума за мечове + сума за роби + сума за колани
        double sum = sumSabers + sumRobes + sumBelts;

        // проверка дали бюджетът е достатъчен
        if (budget >= sum) {
            // достатъчен
            System.out.printf("The money is enough - it would cost %.2flv.", sum);
        } else {
            // budget < sum -> не е достатъчен
            double needMoney = sum - budget;
            System.out.printf("George Lucas will need %.2flv more.", needMoney);
        }
    }
}

// 100/100