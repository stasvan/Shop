package by.itechart.shop.service.dto;

public class LaptopDto {

    private Integer id;
    private ProductDto product;
    private BrandDto brand;
    private String model;
    private Integer year;
    private String screenResolution;
    private String screenTechnology;
    private String screenDiagonal;
    private String cpu;
    private String ram;
    private String camera;
    private String storage;
    private String imageName;

    public LaptopDto() {
    }

    public LaptopDto(Integer id, ProductDto product, BrandDto brand,
                     String model, Integer year, String screenResolution,
                     String screenTechnology, String screenDiagonal, String cpu,
                     String ram, String camera, String storage, String imageName) {
        this.id = id;
        this.product = product;
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.screenResolution = screenResolution;
        this.screenTechnology = screenTechnology;
        this.screenDiagonal = screenDiagonal;
        this.cpu = cpu;
        this.ram = ram;
        this.camera = camera;
        this.storage = storage;
        this.imageName = imageName;
    }

    public LaptopDto(Integer id, ProductDto product, BrandDto brand,
                     String model, Integer year, String screenResolution,
                     String screenTechnology, String screenDiagonal, String cpu,
                     String ram, String storage, String imageName) {
        this.id = id;
        this.product = product;
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.screenResolution = screenResolution;
        this.screenTechnology = screenTechnology;
        this.screenDiagonal = screenDiagonal;
        this.cpu = cpu;
        this.ram = ram;
        this.storage = storage;
        this.imageName = imageName;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public ProductDto getProduct() {
        return product;
    }

    public void setProduct(ProductDto product) {
        this.product = product;
    }

    public BrandDto getBrand() {
        return brand;
    }

    public void setBrand(BrandDto brand) {
        this.brand = brand;
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

    public String getScreenTechnology() {
        return screenTechnology;
    }

    public void setScreenTechnology(String screenTechnology) {
        this.screenTechnology = screenTechnology;
    }

    public String getScreenDiagonal() {
        return screenDiagonal;
    }

    public void setScreenDiagonal(String screenDiagonal) {
        this.screenDiagonal = screenDiagonal;
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
}
