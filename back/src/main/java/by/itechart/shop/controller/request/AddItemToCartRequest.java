package by.itechart.shop.controller.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.math.BigDecimal;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AddItemToCartRequest implements Serializable {
    private Integer productShopId;
    private BigDecimal fixedPrice;

    public Integer getProductShopId() {
        return productShopId;
    }

    public void setProductShopId(Integer productShopId) {
        this.productShopId = productShopId;
    }

    public BigDecimal getFixedPrice() {
        return fixedPrice;
    }

    public void setFixedPrice(BigDecimal fixedPrice) {
        this.fixedPrice = fixedPrice;
    }

}
