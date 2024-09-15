package P09_PrepExams.PE_12_01_03_Spacecrafts;

public class Spacecraft {

    // полета  ->  характеристики
    private String name;
    private String missionType;
    private String target;
    private String objective;
    private int weight;


    // методи
    // конструктор  ->  метод, чрез който създаваме обекти от класа
    // ALT + INSERT
    public Spacecraft(String name, String missionType, String target, String objective, int weight) {
        this.name = name;
        this.missionType = missionType;
        this.target = target;
        this.objective = objective;
        this.weight = weight;
    }


    // Getters & Setters
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getMissionType() {
        return missionType;
    }

    public void setMissionType(String missionType) {
        this.missionType = missionType;
    }

    public String getTarget() {
        return target;
    }

    public void setTarget(String target) {
        this.target = target;
    }

    public String getObjective() {
        return objective;
    }

    public void setObjective(String objective) {
        this.objective = objective;
    }

    public int getWeight() {
        return weight;
    }

    public void setWeight(int weight) {
        this.weight = weight;
    }


    // toString  ->  представя всеки обект от класа под формата на текст
    @Override
    public String toString() {
        String result = String.format("The mission of %s was to reach %s and to %s", this.name, this.target, this.objective);
        return result;
    }
}
