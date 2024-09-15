package P09_PrepExams.PE_12_01_03_Spacecrafts;

// 100/100
public class Main {
    public static void main(String[] args) {

        // COPY + PASTE от ЗАДАНИЕТО за тестване на КЛАСОВЕТЕ Cafe и Employee


        // Initialize the repositories (LaunchPad)
        LaunchPad kennedySC = new LaunchPad("Kennedy Space Center", 3);
        LaunchPad capeCanaveralAFS = new LaunchPad("Cape Canaveral Air Force Station", 5);

        // Initialize entities (Spacecraft)
        Spacecraft galileo = new Spacecraft("Galileo", "Orbiter", "Europa", "study Jupiter and its mysterious moons", 223);
        Spacecraft cassini = new Spacecraft("Cassini-Huygens", "Orbiter", "Saturn", "analyze the composition and atmosphere of Saturn", 2523);
        Spacecraft magellan = new Spacecraft("Magellan", "Orbiter", "Venus", "image the entire surface of Venus", 3445);
        Spacecraft huygens = new Spacecraft("Huygens", "Atmospheric Probe/Lander", "Titan", "provide a detailed study of Titan's atmosphere", 318);
        Spacecraft voyager1 = new Spacecraft("Voyager-1", "Multiple Flybys", "Outer Solar System", "chart the edge of interstellar space", 733);


        // Add Spacecraft
        kennedySC.addSpacecraft(galileo);
        kennedySC.addSpacecraft(cassini);
        kennedySC.addSpacecraft(magellan);
        kennedySC.addSpacecraft(huygens);    // This launchpad is at full capacity!

        capeCanaveralAFS.addSpacecraft(voyager1);

        // Get Spacecraft By Mission Type
        kennedySC.getSpacecraftsByMissionType("Orbiter").forEach(spacecraft -> System.out.println(spacecraft.getName()));
        // Galileo
        // Cassini-Huygens
        // Magellan

        capeCanaveralAFS.getSpacecraftsByMissionType("Multiple Flybys").forEach(spacecraft -> System.out.println(spacecraft.getName()));
        // Voyager-1

        // Remove Spacecraft
        System.out.println(capeCanaveralAFS.removeSpacecraft("Voyager-1"));    // true

        // Launchpad Get Count Of Spacecrafts
        System.out.println(capeCanaveralAFS.getCount());    // 0
    }
}