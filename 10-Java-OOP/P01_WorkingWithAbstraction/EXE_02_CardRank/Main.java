package P01_WorkingWithAbstraction.EXE_02_CardRank;
// package EXE_02_CardRank;
// 100/100

import java.util.Scanner;
import java.util.*;


public class Main {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        // списък обекти enum
        CardRanks[] cardRanks = CardRanks.values();

        System.out.println("Card Ranks:");

        for (CardRanks el : cardRanks) {
            System.out.printf("Ordinal value: %d; Name value: %s\n", el.ordinal(), el.name());
        }

    }
}