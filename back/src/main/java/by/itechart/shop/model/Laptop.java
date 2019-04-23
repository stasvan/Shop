package by.itechart.shop.model;

import javax.persistence.*;

@Entity
@Table(name = "laptop")
public class Laptop {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private String model;
    private Integer year;
    private String screenResolution;
    private String screenDiagonal;
    private String screenTechnology;
    private String cpu;
    private String ram;
    private String camera;
    private String storage;
    private String imageName;

    @OneToOne
    @JoinColumn(name = "product_id")
    private Product product;

    @ManyToOne
    @JoinColumn(name = "brand_id")
    private Brand brand;

    public Laptop() {
    }

    public Laptop(String model, Integer year, String screenResolution,
                  String screenDiagonal, String screenTechnology, String cpu,
                  String ram, String camera, String storage,
                  String imageName, Product product, Brand brand) {
        this.model = model;
        this.year = year;
        this.screenResolution = screenResolution;
        this.screenDiagonal = screenDiagonal;
        this.screenTechnology = screenTechnology;
        this.cpu = cpu;
        this.ram = ram;
        this.camera = camera;
        this.storage = storage;
        this.imageName = imageName;
        this.product = product;
        this.brand = brand;
    }

    public Laptop(String model, Integer year, String screenResolution,
                  String screenDiagonal, String screenTechnology,
                  String cpu, String ram, String storage,
                  String imageName, Product product, Brand brand) {
        this.model = model;
        this.year = year;
        this.screenResolution = screenResolution;
        this.screenDiagonal = screenDiagonal;
        this.screenTechnology = screenTechnology;
        this.cpu = cpu;
        this.ram = ram;
        this.storage = storage;
        this.imageName = imageName;
        this.product = product;
        this.brand = brand;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public Integer getYear() {
        return year;
    }

    public void setYear(Integer year) {
        this.year = year;
    }

    public String getScreenResolution() {
        return screenResolution;
    }

    public void setScreenResolution(String screenResolution) {
        this.screenResolution = screenResolution;
    }

    public String getScreenDiagonal() {
        return screenDiagonal;
    }

    public void setScreenDiagonal(String screenDiagonal) {
        this.screenDiagonal = screenDiagonal;
    }

    public String getScreenTechnology() {
        return screenTechnology;
    }

    public void setScreenTechnology(String screenTechnology) {
        this.screenTechnology = screenTechnology;
    }

    public String getCpu() {
        return cpu;
    }

    public void setCpu(String cpu) {
        this.cpu = cpu;
    }

    public String getRam() {
        return ram;
    }

    public void setRam(String ram) {
        this.ram = ram;
    }

    public String getCamera() {
        return camera;
    }

    public void setCamera(String camera) {
        this.camera = camera;
    }

    public String getStorage() {
        return storage;
    }

    public void setStorage(String storage) {
        this.storage = storage;
    }

    public String getImageName() {
        return imageName;
    }

    public void setImageName(String imageName) {
        this.imageName = imageName;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public Brand getBrand() {
        return brand;
    }

    public void setBrand(Brand brand) {
        this.brand = brand;
    }
}
