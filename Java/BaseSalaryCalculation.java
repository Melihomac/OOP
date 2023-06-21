public class BaseSalaryCalculation {
    public int maas;
    public int oran;

    public BaseSalaryCalculation() {

    }

    public BaseSalaryCalculation(int maas, int oran) {
        this.maas = maas;
        this.oran = oran;
    }

    public void salaryCalculation() {
        this.maas = (this.maas * oran / 20);
        System.out.println("Base Salary: " + this.maas);
    }
}