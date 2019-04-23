package by.itechart.shop.service.dto;

import java.math.BigDecimal;

public class CartItemDto {
    private Integer id;

    private Integer productShopId;

    private Integer userId;

    private BigDecimal fixedPrice;

    public CartItemDto() {
    }

    public CartItemDto(Integer id, Integer productShopId, Integer userId, BigDecimal fixedPrice) {
        this.id = id;
        this.productShopId = productShopId;
        this.userId = userId;
        this.fixedPrice = fixedPrice;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getProductShopId() {
        return productShopId;
    }

    public void setProductShopId(Integer productShopId) {
        this.productShopId = productShopId;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public BigDecimal getFixedPrice() {
        return fixedPrice;
    }

    public void setFixedPrice(BigDecimal fixedPrice) {
        this.fixedPrice = fixedPrice;
    }

}
