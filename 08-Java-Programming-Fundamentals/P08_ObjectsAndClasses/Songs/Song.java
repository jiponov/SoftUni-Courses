package P08_ObjectsAndClasses.Songs;

public class Song {
    private String typeList;
    private String name;
    private String time;

    //конструктор -> създава обект от класа
    public Song(String typeList, String name, String time) {
        //нов празен обект
        this.typeList = typeList;
        this.name = name;
        this.time = time;
    }

    //getter за полето name -> върне стойността на полето name
    public String getName() {
        return name;
    }

    //getter за полето typeList -> върне стойността на полето typeList
    public String getTypeList() {
        return typeList;
    }
}
