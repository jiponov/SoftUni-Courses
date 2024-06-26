// 100/100 Checked with Judge

import java.util.Scanner;
import java.util.*;
import java.util.stream.Collectors;

public class RapidCourier {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String packagesInput = scanner.nextLine();
        String couriersInput = scanner.nextLine();

        ArrayDeque<Integer> stackPackages = new ArrayDeque<>();
        ArrayDeque<Integer> queueCouriers = new ArrayDeque<>();

        Arrays
                .stream(packagesInput.split("\\s+"))
                .map(Integer::parseInt)
                .forEach(stackPackages::push);

        Arrays
                .stream(couriersInput.split("\\s+"))
                .map(Integer::parseInt)
                .forEach(queueCouriers::offer);

        int totalWeight = 0;


        while (!stackPackages.isEmpty() && !queueCouriers.isEmpty()) {

            int packageWeight = stackPackages.peek();
            int courierCapacity = queueCouriers.peek();

            if (courierCapacity >= packageWeight) {
                totalWeight += packageWeight;

                int twiceWeight = 2 * packageWeight;
                courierCapacity -= twiceWeight;

                if (courierCapacity > 0) {
                    queueCouriers.poll();
                    queueCouriers.offer(courierCapacity);
                    stackPackages.pop();
                } else {
                    queueCouriers.poll();
                    stackPackages.pop();
                }


            } else {
                int deliveredPortion = courierCapacity;
                totalWeight += deliveredPortion;

                packageWeight -= courierCapacity;

                stackPackages.pop();
                stackPackages.push(packageWeight);

                queueCouriers.poll();
            }
        }


        System.out.printf("Total weight: %d kg\n", totalWeight);

        if (stackPackages.isEmpty() && queueCouriers.isEmpty()) {
            System.out.println("Congratulations, all packages were delivered successfully by the couriers today.");
        }

        if (!stackPackages.isEmpty() && queueCouriers.isEmpty()) {
            System.out.print("Unfortunately, there are no more available couriers to deliver the following packages: ");

            List<Integer> list = new ArrayList<>();
            for (Integer e : stackPackages) {
                list.add(e);
            }

            stackPackages.clear();
            //Collections.reverse(list);

            for (Integer e : list) {
                stackPackages.push(e);
            }

            System.out.println(stackPackages
                    .stream()
                    .map(String::valueOf)
                    .collect(Collectors.joining(", "))
            );
        }

        if (stackPackages.isEmpty() && !queueCouriers.isEmpty()) {
            System.out.print("Couriers are still on duty: ");

            List<Integer> list = new ArrayList<>();
            for (Integer e : queueCouriers) {
                list.add(e);
            }

            queueCouriers.clear();
            //Collections.reverse(list);

            for (Integer e : list) {
                queueCouriers.offer(e);
            }

            System.out.print(queueCouriers
                    .stream()
                    .map(String::valueOf)
                    .collect(Collectors.joining(", "))
            );
            System.out.print(" but there are no more packages to deliver.\n");
        }

    }
}