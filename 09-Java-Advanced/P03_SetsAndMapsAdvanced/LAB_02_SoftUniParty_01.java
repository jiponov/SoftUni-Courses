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

public class LAB_02_SoftUniParty_01 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        Set<String> vipSet = new TreeSet<>();
        Set<String> regularSet = new TreeSet<>();

        String guest = scanner.nextLine();
        while (!"PARTY".equals(guest)) {
            char startsWith = guest.charAt(0);

            if (Character.isDigit(startsWith)) {
                vipSet.add(guest);
            } else {
                regularSet.add(guest);
            }

            guest = scanner.nextLine();
        }

        guest = scanner.nextLine();
        while (!"END".equals(guest)) {
            vipSet.remove(guest);
            regularSet.remove(guest);

            guest = scanner.nextLine();
        }

        System.out.println(vipSet.size() + regularSet.size());

        for (String g : vipSet) {
            System.out.println(g);
        }

        for (String g : regularSet) {
            System.out.println(g);
        }
    }
}