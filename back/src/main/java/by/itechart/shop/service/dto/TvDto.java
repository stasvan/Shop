package by.itechart.shop.service.dto;

public class TvDto {

    private Integer id;
    private ProductDto product;
    private BrandDto brand;
    private String model;
    private Integer year;
    private String resolution;
    private String technology;
    private String diagonal;
    private String imageName;

    public TvDto() {
    }

    public TvDto(Integer id, ProductDto product, BrandDto brand, String model,
                 Integer year, String resolution, String technology, String diagonal, String imageName) {
        this.id = id;
        this.product = product;
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.resolution = resolution;
        this.technology = technology;
        this.diagonal = diagonal;
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

    public String getResolution() {
        return resolution;
    }

    public void setResolution(String resolution) {
        this.resolution = resolution;
    }

    public String getTechnology() {
        return technology;
    }

    public void setTechnology(String technology) {
        this.technology = technology;
    }

    public String getDiagonal() {
        return diagonal;
    }

    public void setDiagonal(String diagonal) {
        this.diagonal = diagonal;
    }

    public String getImageName() {
        return imageName;
    }

    public void setImageName(String imageName) {
        this.imageName = imageName;
    }
}
