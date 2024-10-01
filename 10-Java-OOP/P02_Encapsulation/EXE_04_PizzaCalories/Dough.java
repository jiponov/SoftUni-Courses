package P02_Encapsulation.EXE_04_PizzaCalories;
// package EXE_04_PizzaCalories;


public class Dough {

    private String flourType;
    private String bakingTechnique;
    private double weight;


    public Dough(String flourType, String bakingTechnique, double weight) {
        setFlourType(flourType);
        setBakingTechnique(bakingTechnique);
        setWeight(weight);
    }


    private void setFlourType(String flourType) {
        // White Wholegrain
        if (!flourType.equals("White") && !flourType.equals("Wholegrain")) {
            throw new IllegalArgumentException("Invalid type of dough.");
        }

        this.flourType = flourType;
    }

    private void setBakingTechnique(String bakingTechnique) {
        // Crispy Chewy Homemade
        if (!bakingTechnique.equals("Crispy") && !bakingTechnique.equals("Chewy") && !bakingTechnique.equals("Homemade")) {
            throw new IllegalArgumentException("Invalid type of dough.");
        }

        this.bakingTechnique = bakingTechnique;
    }

    private void setWeight(double weight) {
        // [1-200]
        if (weight < 1 || weight > 200) {
            throw new IllegalArgumentException("Dough weight should be in the range [1..200].");
        }

        this.weight = weight;
    }

    public double calculateCalories() {

        double flourTypeCoefficient = 0;
        double bakingTechniqueCoefficient = 0;

        // White – 1.5;
        // Wholegrain – 1.0;
        if (flourType.equals("White")) {
            flourTypeCoefficient = 1.5;
        } else if (flourType.equals("Wholegrain")) {
            flourTypeCoefficient = 1.0;
        }

        // Crispy – 0.9;
        // Chewy – 1.1;
        // Homemade – 1.0;
        if (bakingTechnique.equals("Crispy")) {
            bakingTechniqueCoefficient = 0.9;
        } else if (bakingTechnique.equals("Chewy")) {
            bakingTechniqueCoefficient = 1.1;
        } else if (bakingTechnique.equals("Homemade")) {
            bakingTechniqueCoefficient = 1.0;
        }

        //(2 * грамаж) * коеф на тип на брашно * коеф на техника за печена = брой кал. за тестото
        return (2 * weight) * flourTypeCoefficient * bakingTechniqueCoefficient;
    }
}