package P09_PrepExams.PE_09_02_03_ChasingSharks;

public class Shark {

    // полета  ->  характеристики
    private String kind;
    private int length;
    private String food;
    private String habitation;


    // методи
    // конструктор  ->  метод, чрез който създаваме обекти от класа
    // ALT + INSERT
    public Shark(String kind, int length, String food, String habitation) {
        this.kind = kind;
        this.length = length;
        this.food = food;
        this.habitation = habitation;
    }

    // Getters & Setters
    public String getKind() {
        return kind;
    }

    public void setKind(String kind) {
        this.kind = kind;
    }

    public int getLength() {
        return length;
    }

    public void setLength(int length) {
        this.length = length;
    }

    public String getFood() {
        return food;
    }

    public void setFood(String food) {
        this.food = food;
    }

    public String getHabitation() {
        return habitation;
    }

    public void setHabitation(String habitation) {
        this.habitation = habitation;
    }

    // toString  ->  представя всеки обект от класа под формата на текст
    @Override
    public String toString() {
        String result = String.format("The %s is %d centimeters long, eats %s and inhabits %s.", this.kind, this.length, this.food, this.habitation);
        return result;
    }
}