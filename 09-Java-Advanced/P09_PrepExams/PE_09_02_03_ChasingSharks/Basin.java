package P09_PrepExams.PE_09_02_03_ChasingSharks;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class Basin {

    // полета -> характеристики
    private String name;
    private int capacity;
    private List<Shark> sharks;   // списък с обекти от класа Shark


    // методи  ->  поведение
    // конструктор
    public Basin(String name, int capacity) {
        this.name = name;
        this.capacity = capacity;
        this.sharks = new ArrayList<>();
    }


    // приема обект shark от клас Shark
    public void addShark(Shark shark) {
        if (this.sharks.size() < this.capacity) {
            this.sharks.add(shark);
            return;
        }

        System.out.println("This basin is at full capacity!");
    }


    // приема ИМЕ на акула за премахване и ВРЪЩА boolean true/false
    public boolean removeShark(String kind) {
        for (Shark s : this.sharks) {
            if (s.getKind().equals(kind)) {
                this.sharks.remove(s);
                return true;
            }
        }

        return false;
    }


    public Shark getLargestShark() {

        //Shark largestShark = null;
        Shark largestShark = new Shark("", -1, "", "");

        for (Shark s : this.sharks) {
            if (s.getLength() > largestShark.getLength()) {
                largestShark = s;
            }
        }

        return largestShark;
    }


    public Shark getShark(String kind) {

        for (Shark s : this.sharks) {
            if (s.getKind().equals(kind)) {
                return s;
            }
        }

        return null;
    }


    public int getCount() {

        int count = this.sharks.size();
        return count;
    }


    public int getAverageLength() {

        int count = this.sharks.size();
        int total = 0;

        for (Shark s : this.sharks) {
            total += s.getLength();
        }

        int avg = total / count;
        return avg;
    }


    public String report() {

        String result = String.format("Sharks in %s:\n", this.name);

        for (int i = 0; i < this.sharks.size(); i++) {
            Shark s = this.sharks.get(i);
            if (i == this.sharks.size() - 1) {
                result += s.toString();
                break;
            }

            result += s.toString() + "\n";
        }

        return result;
    }
}

/*

for (Shark s : this.sharks) {
            result += s.toString() + "\n";
        }

*/
