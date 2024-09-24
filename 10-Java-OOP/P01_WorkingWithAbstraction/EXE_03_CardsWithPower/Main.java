package P01_WorkingWithAbstraction.EXE_03_CardsWithPower;
// package EXE_03_CardsWithPower;
// 100/100

import java.util.Scanner;


public class Main {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        String rank = scanner.nextLine();   // тип на изтеглената карта
        String suit = scanner.nextLine();   // боя на изтеглената карта

        Card card = new Card(CardSuits.valueOf(suit), CardRanks.valueOf(rank));
        // пример:   CardSuits.valueOf(suit)    от enum-a CardSuits ми вземи с .valueOf() ЗАПИСА
        //           който съвпада с получения от конзолата стринг запазен в "suit" променливата

        // System.out.println();

        System.out.printf("Card name: %s of %s; Card power: %d", rank, suit, card.calculatePower());


        // System.out.println(CardRanks.JACK.getValue());    // 11 ще даде в КОНЗОЛАТА
    }
}