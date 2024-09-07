package P09_PrepExams.PE_01_25_01_SantasPresentFactory;
// 100/100
import java.util.ArrayDeque;
import java.util.Arrays;
import java.util.stream.Collectors;

import java.util.Scanner;
import java.util.*;


public class SantasPresentFactory_02 {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        // "10 -5 20 15 -30 10".split(" ")   ->   ["10", "-5", "20"...]
        String materialsInput = scanner.nextLine();
        // "40 60 10 4 10 0"
        String magicsInput = scanner.nextLine();


        // OR:   Stack<Integer> stackMaterials = new Stack<>();
        // stack  -  ВЗИМАМЕ ПОСЛЕДНИЯ НАЙ-ГОРЕ ЕЛЕМЕНТ от стека
        ArrayDeque<Integer> stackMaterials = new ArrayDeque<>();

        Arrays
                .stream(materialsInput.split("\\s+"))
                .map(Integer::parseInt)
                .forEach(stackMaterials::push);


        // OR:   Queue<Integer> queueMagics = new Queue<>();
        // queue  -  ВЗИМАМЕ ПЪРВИЯТ ВЛЕЗНАЛ ЕЛЕМЕНТ от опашката
        ArrayDeque<Integer> queueMagics = Arrays
                .stream(magicsInput.split("\\s+"))
                .map(Integer::parseInt)
                .collect(Collectors.toCollection(ArrayDeque::new));


        // map   играчка -> бр. произведени
        Map<String, Integer> mapPresents = new TreeMap<>();

        mapPresents.put("Doll", 0);
        mapPresents.put("Wooden train", 0);
        mapPresents.put("Teddy bear", 0);
        mapPresents.put("Bicycle", 0);


        while (!stackMaterials.isEmpty() && !queueMagics.isEmpty()) {

            // най-горения ПОСЛЕДЕН материал от стека
            int material = stackMaterials.peek();
            // ПЪРВАТА магия на опашката
            int magic = queueMagics.peek();

            // получената магия при миксиране
            int craftPresent = magic * material;


            // проверка за получената магия
            if (craftPresent == 150) {
                // кукла е направил Дядо Коледа
                stackMaterials.pop();
                queueMagics.poll();
                mapPresents.put("Doll", mapPresents.get("Doll") + 1);

            } else if (craftPresent == 250) {
                // влакче е направил Дядо Коледа
                stackMaterials.pop();
                queueMagics.poll();
                mapPresents.put("Wooden train", mapPresents.get("Wooden train") + 1);

            } else if (craftPresent == 300) {
                // мече е направил Дядо Коледа
                stackMaterials.pop();
                queueMagics.poll();
                mapPresents.put("Teddy bear", mapPresents.get("Teddy bear") + 1);

            } else if (craftPresent == 400) {
                // колело е направил Дядо Коледа
                stackMaterials.pop();
                queueMagics.poll();
                mapPresents.put("Bicycle", mapPresents.get("Bicycle") + 1);

            } else if (craftPresent < 0) {
                int sum = material + magic;
                stackMaterials.pop();
                queueMagics.poll();
                stackMaterials.push(sum);

            } else if (craftPresent > 0) {
                queueMagics.poll();
                stackMaterials.push(stackMaterials.pop() + 15);

            } else {

                if (magic == 0) {
                    queueMagics.poll();
                }

                if (material == 0) {
                    stackMaterials.pop();
                }
            }

        }


        // проверка дали сме произвели нужните подаръци
        // 1. кукла и влакче
        // 2. мече и колело
        boolean isDollAndTrain = mapPresents.get("Doll") > 0 && mapPresents.get("Wooden train") > 0;
        boolean isBearAndBicycle = mapPresents.get("Teddy bear") > 0 && mapPresents.get("Bicycle") > 0;


        if (isDollAndTrain || isBearAndBicycle) {
            // СПРАВИЛИ сме се с изработката
            System.out.println("The presents are crafted! Merry Christmas!");

        } else {
            // НЕ сме се справили с изработката
            System.out.println("No presents this Christmas!");
        }


        // останалите материали
        if (!stackMaterials.isEmpty()) {
            System.out.print("Materials left: ");
            // [3, 4, 5]


            // Convert ArrayDeque to List
            List<Integer> list = new ArrayList<>(stackMaterials);

            // Reverse the List
            Collections.reverse(list);

            // Clear the original stack
            stackMaterials.clear();

            // Push all elements from the reversed List back to the stack
            for (Integer e : list) {
                stackMaterials.push(e);
            }


            System.out.println(stackMaterials.stream().map(String::valueOf).collect(Collectors.joining(", ")));
            // OR:
            // System.out.println(stackMaterials.toString().replace("[", "").replace("]", ""));
        }


        // останалите магии
        if (!queueMagics.isEmpty()) {
            System.out.print("Magic left: ");
            System.out.println(queueMagics.toString().replace("[", "").replace("]", ""));
        }


        // отпечатваме: играчка: брой > 0
        for (Map.Entry<String, Integer> entry : mapPresents.entrySet()) {
            // entry
            // key: играчка
            // value: бройка
            if (entry.getValue() > 0) {
                System.out.println(entry.getKey() + ": " + entry.getValue());
            }
        }

    }
}
