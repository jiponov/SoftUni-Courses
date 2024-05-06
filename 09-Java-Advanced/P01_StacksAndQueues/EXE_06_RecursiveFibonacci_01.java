package P01_StacksAndQueues;
// 100/100
// ARRAY DEQUE

import java.util.ArrayDeque;
import java.util.Collections;
import java.util.PriorityQueue;
import java.util.Comparator;
import java.util.Scanner;

public class EXE_06_RecursiveFibonacci_01 {
    public static long[] memoryForFib;

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int n = Integer.parseInt(scanner.nextLine());
        memoryForFib = new long[n + 1];
        System.out.println(fib(n));
    }

    public static long fib(int n) {
        if (n <= 1) {
            return 1;
        }
        if (memoryForFib[n] != 0) {
            return memoryForFib[n];
        }
        return memoryForFib[n] = fib(n - 1) + fib(n - 2);
    }
}
