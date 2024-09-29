package P02_Encapsulation.EXE_03_ShoppingSpree_01;
// package EXE_03_ShoppingSpree_01;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.*;


public class Person {

    private String name;
    private double money;
    private List<Product> products;


    public Person(String name, double money) {
        setName(name);
        setMoney(money);
        this.products = new ArrayList<>();
    }


    private void setName(String name) {
        // Валидация
        // name.trim().isEmpty()
        if (name == null || name.isEmpty() || name.isBlank()) {
            throw new IllegalArgumentException("Name cannot be empty");
        }

        this.name = name;
    }

    private void setMoney(double money) {
        // Валидация
        if (money < 0) {
            throw new IllegalArgumentException("Money cannot be negative");
        }

        this.money = money;
    }


    public void buyProduct(Product product) {    // продукт който искаме да купим
        // Проверявам дали човека може да си позволи продукта
        if (product.getCost() > this.money) {
            String message = String.format("%s can't afford %s", this.getName(), product.getName());
            throw new IllegalArgumentException(message);
        }

        this.products.add(product);   // добавяме към кошницата на човека
        this.money -= product.getCost();

        System.out.printf("%s bought %s\n", this.getName(), product.getName());
    }


    public String getName() {
        return name;
    }


    public List<Product> getProducts() {
        return Collections.unmodifiableList(products);
    }
}