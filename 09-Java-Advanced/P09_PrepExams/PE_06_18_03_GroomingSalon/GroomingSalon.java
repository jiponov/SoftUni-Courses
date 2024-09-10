package P09_PrepExams.PE_06_18_03_GroomingSalon;

import java.util.ArrayList;
import java.util.List;

public class GroomingSalon {

    // полета -> характеристики
    private int capacity;

    // списък с обекти от класа Pet  -  това e списък животни (data collection)
    private List<Pet> data;


    // Конструктор  ->  метод, чрез който създаваме обекти от класа
    public GroomingSalon(int capacity) {
        this.capacity = capacity;
        this.data = new ArrayList<>();
    }


    // МЕТОДИ  ->  поведение

    // приема обект pet от клас Pet
    public void add(Pet pet) {
        if (this.data.size() < this.capacity) {
            this.data.add(pet);
        }
    }

    // приема ИМЕ на животно за премахване и ВРЪЩА boolean true/false
    public boolean remove(String name) {
        for (Pet pet : this.data) {
            // ако ДАДЕНО животно от списъка му ВЗЕМА името, и то съвпада с ПОДАДЕНОТО горе ИМЕ което ТЪРСЯ
            if (pet.getName().equals(name)) {
                this.data.remove(pet);
                return true;
            }
        }

        // преминали сме през всички животни и НЕ сме намерили животно с даденото име.
        return false;
    }

    public Pet getPet(String name, String owner) {
        for (Pet pet : this.data) {
            if (pet.getName().equals(name) && pet.getOwner().equals(owner)) {
                return pet;
            }
        }

        // преминали през всички животни и не сме намерили животно с даденото име и стопанин
        return null;
    }

    public int getCount() {
        int result = this.data.size();
        return result;
    }

    public String getStatistics() {
        String result = " The grooming salon has the following clients:\n";
        for (Pet pet : this.data) {
            result += String.format("%s %s\n", pet.getName(), pet.getOwner());
        }

        return result;
    }
}