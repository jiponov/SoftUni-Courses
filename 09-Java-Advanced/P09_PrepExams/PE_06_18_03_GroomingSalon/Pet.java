package P09_PrepExams.PE_06_18_03_GroomingSalon;

public class Pet {

    // полета  ->  характеристики
    private String name;
    private int age;
    private String owner;


    // Конструктор  ->  метод, чрез който създаваме обекти от класа (ALT + INSERT)
    public Pet(String name, int age, String owner) {
        this.name = name;
        this.age = age;
        this.owner = owner;
    }


    // GETTERS and SETTERS
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getOwner() {
        return owner;
    }

    public void setOwner(String owner) {
        this.owner = owner;
    }


    // toString  ->  представя всеки обект от класа под формата на текст
    @Override
    public String toString() {
        String result = String.format("%s %d - (%s)", this.name, this.age, this.owner);
        return result;
    }

}