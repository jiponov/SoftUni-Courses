package P03_Inheritance.LAB_03_RandomArrayList;
//package LAB_03_RandomArrayList;

import java.util.ArrayList;
import java.util.List;

public class Main {

    public static void main(String[] args) {
        RandomArrayList<Integer> randomArrayList = new RandomArrayList<>();

        randomArrayList.add(5);
        randomArrayList.add(6);
        randomArrayList.add(7);
        randomArrayList.add(8);
        randomArrayList.add(9);

        // System.out.println(randomArrayList.get(0));

        System.out.println(randomArrayList.getRandomElement());
        System.out.println(randomArrayList.getRandomElement());
        System.out.println(randomArrayList.getRandomElement());
        System.out.println(randomArrayList.getRandomElement());
        System.out.println(randomArrayList.getRandomElement());
    }
}