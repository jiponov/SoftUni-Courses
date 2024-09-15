package P09_PrepExams.PE_12_01_03_Spacecrafts;

import P09_PrepExams.PE_09_02_03_ChasingSharks.Shark;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;


public class LaunchPad {

    // полета -> характеристики
    private String name;
    private int capacity;
    private List<Spacecraft> spacecrafts;   // списък с обекти от класа Spacecraft


    // методи  ->  поведение
    // конструктор
    public LaunchPad(String name, int capacity) {
        this.name = name;
        this.capacity = capacity;
        this.spacecrafts = new ArrayList<>();
    }


    public void addSpacecraft(Spacecraft spacecraft) {
        if (this.spacecrafts.size() < this.capacity) {
            this.spacecrafts.add(spacecraft);
            return;
        }

        System.out.println("This launchpad is at full capacity!");
    }

    public boolean removeSpacecraft(String name) {
        for (Spacecraft s : this.spacecrafts) {
            if (s.getName().equals(name)) {
                this.spacecrafts.remove(s);
                return true;
            }
        }

        return false;
    }

    public String getHeaviestSpacecraft() {

        Spacecraft heaviestSpacecraft = new Spacecraft("", "", "", "", -1);

        for (Spacecraft s : this.spacecrafts) {
            if (s.getWeight() > heaviestSpacecraft.getWeight()) {
                heaviestSpacecraft = s;
            }
        }

        String nameHeaviestSpacecraft = heaviestSpacecraft.getName();
        int weightHeaviestSpacecraft = heaviestSpacecraft.getWeight();

        String result = String.format("%s - %dkg.", nameHeaviestSpacecraft, weightHeaviestSpacecraft);
        return result;
    }

    public Spacecraft getSpacecraft(String name) {

        for (Spacecraft s : this.spacecrafts) {
            if (s.getName().equals(name)) {
                return s;
            }
        }

        return null;
    }

    public int getCount() {

        int count = this.spacecrafts.size();
        return count;
    }

    public List<Spacecraft> getSpacecraftsByMissionType(String missionType) {

        List<Spacecraft> spacecraftsByMission = new ArrayList<>();
        for (Spacecraft s : this.spacecrafts) {
            if (s.getMissionType().equals(missionType)) {
                spacecraftsByMission.add(s);
            }
        }

        if (spacecraftsByMission.isEmpty()) {
            System.out.println("There are no spacecrafts to respond this criteria.");
        }

        return spacecraftsByMission;   // OR: null
    }

    public String getStatistics() {

        String result = String.format("Spacecrafts launched from %s:\n", this.name);

        int counter = 1;
        for (Spacecraft s : this.spacecrafts) {
            result += counter + ". " + s.getName() + "\n";
            counter++;
        }

        if (this.spacecrafts.isEmpty()) {
            result = String.format("Spacecrafts launched from %s:\n" +
                    "none\n", this.name);
        }

        return result;
    }
}