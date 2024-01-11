import java.util.Scanner;

public class CleverLily {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int age = Integer.parseInt(scanner.nextLine());
        double priceWasher = Double.parseDouble(scanner.nextLine());
        int pricePerToy = Integer.parseInt(scanner.nextLine());

        // повтаряме: за всеки рожден ден -> проверяваме какво е получила
        // начало: първия рожден ден (1)
        // край: последния рожден ден (age)
        // промяна: +1

        int countToys = 0;              //брой на играчките
        double savedMoney = 0;          //спестени пари
        double giftSum = 0;             //сума, която и подаряват

        for (int birthday = 1; birthday <= age; birthday++) {
            if (birthday % 2 == 0) {
                //четен рожден ден -> пари
                giftSum += 10;                              //giftSum = giftSum + 10;
                savedMoney += giftSum - 1;
            } else {
                //нечетен  рожден ден -> играчка
                countToys++;
            }
        }

        //общата събрана сума = (бр. играчки * pricePerToy) + спестени пари
        double totalSum = (countToys * pricePerToy) + savedMoney;

        //проверка дали събраните пари стигат за пералнята
        if (totalSum >= priceWasher) {
            double leftMoney = totalSum - priceWasher;      //останалите пари след покупката
            System.out.printf("Yes! %.2f", leftMoney);
        } else {
            //totalSum < priceWasher -> не достигат
            double needMoney = priceWasher - totalSum;      //недостигащи пари
            System.out.printf("No! %.2f", needMoney);
        }
    }
}

// 100/100