package vintageLocos;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

public class TrainStation {

    private String name;
    private int capacity;
    private int railGauge;
    private List<Locomotive> locomotives;

    public TrainStation(String name, int capacity, int railGauge) {
        this.name = name;
        this.capacity = capacity;
        this.railGauge = railGauge;
        this.locomotives = new ArrayList<>();
    }

    public void addLocomotive(Locomotive locomotive) {

        if (this.locomotives.size() < this.capacity && locomotive.getGauge() == railGauge) {
            //savedLocomotiveGauge = locomotive.getGauge();
            this.locomotives.add(locomotive);
            return;
        } else {
            System.out.println("This train station is full!");
        }

        if (locomotive.getGauge() != railGauge) {
            int diff = Math.abs(locomotive.getGauge() - railGauge);
            System.out.printf("The rail gauge of this station does not match the locomotive gauge! Difference: %d mm.\n", diff);
        }
    }

    public boolean removeLocomotive(String name) {
        for (Locomotive loco : this.locomotives) {
            if (loco.getName().equals(name)) {
                this.locomotives.remove(loco);
                return true;
            }
        }

        return false;
    }

    public String getFastestLocomotive() {

        Locomotive fastestLocomotive = new Locomotive("", "", LocalDate.MIN, 0, 0, 0);

        if (this.locomotives.isEmpty()) {
            System.out.println("There are no locomotives.");
            return "";
        }

        for (Locomotive loco : this.locomotives) {
            if (loco.getMaxSpeed() > fastestLocomotive.getMaxSpeed()) {
                fastestLocomotive = loco;
            }
        }

        String nameFastestLocomotive = fastestLocomotive.getName();
        int maxSpeedFastestLocomotive = fastestLocomotive.getMaxSpeed();

        String result = String.format("%s is the fastest locomotive with a maximum speed of %d km/h.", nameFastestLocomotive, maxSpeedFastestLocomotive);
        return result;
    }

    public Locomotive getLocomotive(String name) {

        for (Locomotive loco : this.locomotives) {
            if (loco.getName().equals(name)) {
                return loco;
            }
        }

        return null;
    }

    public int getCount() {

        int count = this.locomotives.size();
        return count;
    }

    public String getOldestLocomotive() {

        String oldName = "";

        for (int i = 0; i < this.locomotives.size(); i++) {
            if (i == 0) {
                Locomotive getFirst = this.locomotives.get(i);
                oldName = getFirst.getName();
                break;
            }
        }

        if (this.locomotives.isEmpty()) {
            System.out.println("There are no locomotives.");
            return "";
        }

        return oldName;
    }

    public String getStatistics() {

        String result = String.format("Locomotives departed from %s:\n", this.name);

        int counter = 1;
        for (Locomotive loco : this.locomotives) {
            result += counter + ". " + loco.getName() + "\n";
            counter++;
        }

        if (this.locomotives.isEmpty()) {
            result = String.format("There are no locomotives departing from %s station.", this.name);
        }

        return result;
    }
}