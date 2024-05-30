package P03_SetsAndMapsAdvanced;
// 100/100
// SETS and MAPS

import java.util.*;
import java.util.Scanner;
import java.util.stream.Collectors;
import java.util.ArrayList;

import java.util.Map;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.TreeMap;

import java.util.Set;
import java.util.HashSet;
import java.util.TreeSet;
import java.util.LinkedHashSet;

import static java.util.Map.Entry.comparingByKey;
import static java.util.Map.Entry.comparingByValue;

public class LAB_03_Voina_01 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        LinkedHashSet<Integer> firstDeck = Arrays
                .stream(scanner.nextLine().split("\\s+"))
                .map(Integer::parseInt)
                .collect(Collectors.toCollection(LinkedHashSet::new));
        // OR:  .collect(Collectors.toCollection(() -> new LinkedHashSet<>()));

        LinkedHashSet<Integer> secondDeck = Arrays
                .stream(scanner.nextLine().split("\\s+"))
                .map(Integer::parseInt)
                .collect(Collectors.toCollection(LinkedHashSet::new));

        int rounds = 50;   // The game ends after 50 rounds

        while (rounds-- > 0) {
            // Use Iterator<E> and next() for finding the top number in decks.
            int firstCard = firstDeck
                    .iterator()
                    .next();

            /* OR:
            int firstCard = 0;
            for (Integer c : firstDeck) {
                firstCard = c;
                break;
            }
            */

            firstDeck.remove(firstCard);

            int secondCard = secondDeck
                    .iterator()
                    .next();

            secondDeck.remove(secondCard);

            if (firstCard > secondCard) {
                firstDeck.add(firstCard);
                firstDeck.add(secondCard);
            } else if (secondCard > firstCard) {
                secondDeck.add(firstCard);
                secondDeck.add(secondCard);
            }

            // The game ends if any player loses all of his numbers.
            if (firstDeck.isEmpty() || secondDeck.isEmpty()) {
                break;
            }
        }


        String output;

        if (firstDeck.size() > secondDeck.size()) {
            output = "First player win!";
        } else if (secondDeck.size() > firstDeck.size()) {
            output = "Second player win!";
        } else {
            output = "Draw!";
        }

        System.out.println(output);
    }
}