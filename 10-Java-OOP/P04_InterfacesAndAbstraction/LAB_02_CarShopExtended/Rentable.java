package P04_InterfacesAndAbstraction.LAB_02_CarShopExtended;

//package LAB_02_CarShopExtended;
public interface Rentable extends Car {

    int getMinRentDay();

    double getPricePerDay();


    default double getPriceForDays(int numberOfDays) {

        if (numberOfDays < getMinRentDay()) {
            String message = String.format("Cannot rent %s for less than %d days", getModel(), getMinRentDay());
            throw new IllegalArgumentException(message);
        }

        return numberOfDays * getPricePerDay();
    }
}
