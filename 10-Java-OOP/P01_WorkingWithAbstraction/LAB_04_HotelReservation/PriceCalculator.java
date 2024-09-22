package P01_WorkingWithAbstraction.LAB_04_HotelReservation;

public class PriceCalculator {

    public static double calculateHolidayPrice(double pricePerDay, int days, Season season, DiscountType discountType) {

        // сума тотал за всички дни
        double priceTotalHoliday = pricePerDay * days;
        // коефициент умножение спрямо сезона
        priceTotalHoliday = priceTotalHoliday * season.getMultiplyCoefficient();
        // отстъпката за сезона
        priceTotalHoliday = priceTotalHoliday - priceTotalHoliday * (discountType.getPercent() / 100);

        return priceTotalHoliday;
    }

}
