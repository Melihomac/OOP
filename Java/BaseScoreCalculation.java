public abstract class BaseScoreCalculation {
    public abstract void scoreCalculate();

    public final void gameOver() {
        System.out.println("Oyun Bitti");
    }
}
