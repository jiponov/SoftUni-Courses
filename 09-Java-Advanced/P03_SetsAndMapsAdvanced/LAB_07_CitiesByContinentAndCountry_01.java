package P03_SetsAndMapsAdvanced;

import java.util.*;
import java.util.stream.Collectors;

public class LAB_07_CitiesByContinentAndCountry_01 {
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

        mapMaster.forEach((continent, countries) -> {
            System.out.println(continent + ":");

            countries.forEach((country, cities) -> {

                String joinedCities = String.join(", ", cities);

                System.out.println("  " + country + " -> " + joinedCities);
            });
        });
    }
}