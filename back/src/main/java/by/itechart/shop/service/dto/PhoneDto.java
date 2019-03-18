package by.itechart.shop.service.dto;

public class PhoneDto {

  private Integer id;
  private Integer productId;
  private String brand;
  private String model;
  private Integer year;
  private String screenResolution;
  private String screenTechnology;
  private String cpu;
  private String ram;
  private String imageName;

  public PhoneDto(Integer id, Integer productId, String brand, String model,
                  Integer year, String screenResolution, String screenTechnology,
                  String cpu, String ram, String imageName) {
    this.id = id;
    this.productId = productId;
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.screenResolution = screenResolution;
    this.screenTechnology = screenTechnology;
    this.cpu = cpu;
    this.ram = ram;
    this.imageName = imageName;
  }

  public PhoneDto() {

  }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getProductId() {
        return productId;
    }

    public void setProductId(Integer productId) {
        this.productId = productId;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
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

    public String getImageName() {
        return imageName;
    }

    public void setImageName(String imageName) {
        this.imageName = imageName;
    }
}
