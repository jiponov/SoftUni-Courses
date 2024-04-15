package P10_TextProcessing;

import java.util.Scanner;

public class StringExplosion {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String input = scanner.nextLine();
        StringBuilder sb = new StringBuilder(input);

        int position = 0;   // Initialize position variable
        int explosionStrength = 0;
        while (position < sb.length()) {  // Use a while loop instead of a for loop
            char currentSymbol = sb.charAt(position);

            if (currentSymbol == '>') {
                // TRANSFORM:  char ('1')  ->  string ("1")  ->  int (1)
                int attackStrength = Integer.parseInt(sb.charAt(position + 1) + ""); // сила на атаката
                explosionStrength += attackStrength;

            } else if (currentSymbol != '>' && explosionStrength > 0) {
                // DELETING
                sb.deleteCharAt(position);
                explosionStrength--;
                position--;
            }

            position++;
        }

        System.out.println(sb);
    }
}

// 100/100
/*
INPUT: abv>1>1>2>2asdasd OUTPUT: abv>>>>dasd
INPUT: peter>2sis>1a>2akarate>4hexmaster OUTPUT: peter>is>a>karate>master
*/