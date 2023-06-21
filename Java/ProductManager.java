public class ProductManager {
    public void add(ProductEncapsulation productEncapsulation) { // Object Referer
        System.out.println("Product added to database");
        productEncapsulation.setId("1");
        System.out.println(productEncapsulation.getId());
    }
}
