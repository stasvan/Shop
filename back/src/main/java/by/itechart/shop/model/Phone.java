package by.itechart.shop.model;

import javax.persistence.*;

@Entity
@Table(name = "phone")
public class Phone {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private Integer productId;
    private Integer brandId;
    private String model;
    private Integer year;
    private String screenResolution;
    private String screenTechnology;
    private String cpu;
    private String ram;

    public Phone(Integer productId, Integer brandId, String model,
                 Integer year, String screenResolution,
                 String screenTechnology, String cpu, String ram) {
        this.productId = productId;
        this.brandId = brandId;
        this.model = model;
        this.year = year;
        this.screenResolution = screenResolution;
        this.screenTechnology = screenTechnology;
        this.cpu = cpu;
        this.ram = ram;
    }

    public Phone() {

    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Integer getProductId() {
        return productId;
    }

    public void setProductId(Integer productId) {
        this.productId = productId;
    }

    public Integer getBrandId() {
        return brandId;
    }

    public void setBrandId(Integer brandId) {
        this.brandId = brandId;
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

}
