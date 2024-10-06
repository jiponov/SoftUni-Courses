package P03_Inheritance.EXE_01_Person;
// package EXE_01_Person;


public class Child extends Person {
    // superclass е Person
    // subclass e Child


    // ПОЛЕТА:  name, age   полета имаме тук от Person идват

    // Правило: Всеки sub-class (дъщерен клас) трябва да удовлетворява конструктора на бащиният си клас!
    // Когато създавам обект от клас, който наследява друг клас, Java винаги ще се опита да извика конструктора на бащиният клас


    // КОНСТРУКТОР на Child
    public Child(String name, int age) {        // -> при създаване на нов обект от Child с име и години
        super(name, age);                       // -> викаме конструктора на superclass-a Person с super(), и оттам се изпълняват редовете на superclass-a в констр. на superclass-a
    }

    // когато правим ОБЕКТ (инстанция) от класа Child ,за конструктор ползваме чрез super() този на Person
    // както ползваме и ПОЛЕТАТА и МЕТОДИТЕ на Person при Child класа
}