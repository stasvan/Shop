package by.itechart.shop.service.dto;

import java.math.BigDecimal;

public class ProductShopDto {

    private Integer id;

    private ProductDto product;

    private ShopDto shop;

    private BigDecimal price;

    public ProductShopDto() {
    }

    public ProductShopDto(Integer id, ProductDto product, ShopDto shop, BigDecimal price) {
        this.id = id;
        this.product = product;
        this.shop = shop;
        this.price = price;
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

    public ShopDto getShop() {
        return shop;
    }

    public void setShop(ShopDto shop) {
        this.shop = shop;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }
}
