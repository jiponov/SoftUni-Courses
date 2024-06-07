package P03_SetsAndMapsAdvanced;

import java.util.*;
import java.util.stream.Collectors;

public class LAB_07_CitiesByContinentAndCountry_02 {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        int n = Integer.parseInt(scanner.nextLine());

        LinkedHashMap<String, LinkedHashMap<String, List<String>>>
                mapMaster = new LinkedHashMap<>();

        while (n-- > 0) {
            String[] tokens = scanner.nextLine().split("\\s+");

            String continent = tokens[0];
            String country = tokens[1];
            String city = tokens[2];

            mapMaster.putIfAbsent(continent, new LinkedHashMap<>());

            LinkedHashMap<String, List<String>> mapSlave =
                    mapMaster.get(continent);

            mapSlave.putIfAbsent(country, new ArrayList<>());

            List<String> cities = mapSlave.get(country);

            cities.add(city);
        }

        for (Map.Entry<String, LinkedHashMap<String, List<String>>> entry : mapMaster.entrySet()) {
            String key = entry.getKey();
            LinkedHashMap<String, List<String>> mapSlave = entry.getValue();

            System.out.println(key + ":");

            for (Map.Entry<String, List<String>> pair : mapSlave.entrySet()) {
                System.out.println("  " + pair.getKey() + " -> " + String.join(", ", pair.getValue()));
            }
        }

    }
}
