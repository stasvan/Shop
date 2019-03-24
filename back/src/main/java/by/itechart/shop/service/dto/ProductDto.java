package by.itechart.shop.service.dto;


public class ProductDto {

    private Integer id;
    private ProductTypeDto productType;

    public ProductDto() {
    }

    public ProductDto(Integer id, ProductTypeDto productType) {
        this.id = id;
        this.productType = productType;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public ProductTypeDto getProductType() {
        return productType;
    }

    public void setProductType(ProductTypeDto productType) {
        this.productType = productType;
    }

}
