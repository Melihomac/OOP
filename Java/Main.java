public class Main {
  public static void main(String[] args) {
    Car car = new Car();
    Car car2 = new Car();

    car.brand = "Ford";
    car.model = "Focus";
    car.color = "Black";
    car.price = 1000;

    car2.brand = "Fiat";
    car2.model = "Linea";
    car2.color = "White";
    car2.price = 100;

    car.printStates();
    car2.printStates();

    car.speed = 100;
    car2.speed = 130;
    car.speedUp(50);
    car2.speedUp(20);
    System.out.println("1. Aracın hızı " + car.speed);
    System.out.println("2. Aracın hızı " + car2.speed);
    car.applyBreaks(100);
    car2.applyBreaks(20);
    System.out.println("1. Aracın son hızı " + car.speed);
    System.out.println("2. Aracın son hızı " + car2.speed);
  }
}