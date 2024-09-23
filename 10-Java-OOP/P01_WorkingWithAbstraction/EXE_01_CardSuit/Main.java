package P01_WorkingWithAbstraction.EXE_01_CardSuit;
// package EXE_01_CardSuit;
// 100/100

import java.util.Scanner;
import java.util.*;


public class Main {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        // enum class CardSuits  викаме всички обекти в него  ,в масив ги връща
        CardSuits[] cardSuits = CardSuits.values();

        System.out.println("Card Suits:");

        for (CardSuits el : cardSuits) {
            // System.out.println(el.getValue());  ->  0, 13, 26, 39 връща
            System.out.printf("Ordinal value: %d; Name value: %s\n", el.ordinal(), el.name());
        }


        // масивът cardSuits може с ИНДЕКСИ да го ползвам също:
        // System.out.println(cardSuits[1]);
        // отпечатва на КОНЗОЛА:  DIAMONDS


        // съхранение на дадено име от enuma в string променлива
        /*

        String name0 = CardSuits.CLUBS.name();
        String name1 = CardSuits.DIAMONDS.name();
        String name2 = CardSuits.HEARTS.name();
        String name3 = CardSuits.SPADES.name();

        */


        // Incompatible types.  Required:  String;  НЕ МОЖЕ ТАКА, не дава String
        // String nameTry = CardSuits.CLUBS;

        // CORRECT way:  save the object itself in the correct type (enum type)
        // CardSuits clubs = CardSuits.CLUBS;
    }
}