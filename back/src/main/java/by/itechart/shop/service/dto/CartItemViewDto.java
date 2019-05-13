package by.itechart.shop.service.dto;

import java.math.BigDecimal;

public class CartItemViewDto {

    private Integer cartItemId;

    private String brand;
    private String model;
    private String imageName;
    private Integer year;

    private String shopName;

    private BigDecimal price;

    public CartItemViewDto() {
    }

    public CartItemViewDto(Integer cartItemId, String brand, String model, Integer year, String imageName,
                           String shopName, BigDecimal price) {
        this.cartItemId = cartItemId;
        this.brand = brand;
        this.model = model;
        this.imageName = imageName;
        this.year = year;
        this.shopName = shopName;
        this.price = price;
    }

    public Integer getCartItemId() {
        return cartItemId;
    }

    public void setCartItemId(Integer cartItemId) {
        this.cartItemId = cartItemId;
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

    public String getImageName() {
        return imageName;
    }

    public void setImageName(String imageName) {
        this.imageName = imageName;
    }

    public String getShopName() {
        return shopName;
    }

    public void setShopName(String shopName) {
        this.shopName = shopName;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }
}
