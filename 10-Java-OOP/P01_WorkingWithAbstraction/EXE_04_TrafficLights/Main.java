package P01_WorkingWithAbstraction.EXE_04_TrafficLights;
// package EXE_04_TrafficLights;
// 100/100
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;


public class Main {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);


        // "GREEN RED YELLOW".split(" ")  ->  ["GREEN", "RED", "YELLOW"]
        Color[] colors = Arrays
                .stream(scanner.nextLine().split(" "))
                .map(Color::valueOf)
                .toArray(Color[]::new);


        int n = Integer.parseInt(scanner.nextLine());    // колко на брой пъти ще сменя цвета на светофарите


        List<TrafficLight> listTL = new ArrayList<>();   // list с всички светофари


        for (Color c : colors) {

            // СЪЗДАЙ нов светофар, който СВЕТИ с този ЦВЯТ:  червено... зелено... жълто ....
            TrafficLight el = new TrafficLight(c);    // напр.  жълто
            listTL.add(el);     // вкарай жълт в листа светофари
        }


        // списък със светофарите
        for (int i = 1; i <= n; i++) {
            // сменяме цвета на всеки един светофар
            for (TrafficLight el : listTL) {
                el.changeColor();
                System.out.print(el.getColor() + " ");
            }

            System.out.println();
        }

    }
}