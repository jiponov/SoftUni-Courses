package P01_StacksAndQueues;
// 100/100
// ARRAY DEQUE

import java.util.ArrayDeque;
import java.util.Collections;
import java.util.PriorityQueue;
import java.util.Comparator;
import java.util.Scanner;

public class EXE_04_BasicQueueOperations_01 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int n = scanner.nextInt(); // брой на елементите, които трябва да добавя -> add
        int s = scanner.nextInt(); // брой на елементите, които тярбва да махна
        int x = scanner.nextInt(); // число, което проверявам дали го има

        // нов опашка
        ArrayDeque<Integer> queue = new ArrayDeque<>();

        // ДОБАВЯНЕ (add) -> n на брой пъти
        for (int count = 1; count <= n; count++) {
            // add
            queue.offer(scanner.nextInt());
        }

        // ПРЕМАХВАНЕ (poll) -> s на брой пъти
        for (int count = 1; count <= s; count++) {
            queue.poll();
        }

        // ПРОВЕРКА ЗА НАЛИЧИЕ НА ЧИСЛОТО X В СТЕКА
        // ИМА
        if (queue.contains(x)) {
            System.out.println("true");
        } else {
            // НЯМА  ->  принтираме най-малкия елемент в стека
            if (queue.isEmpty()) {
                // празен стек
                System.out.println(0);
            } else {
                // имаме елементи
                System.out.println(Collections.min(queue));
            }
        }
    }
}