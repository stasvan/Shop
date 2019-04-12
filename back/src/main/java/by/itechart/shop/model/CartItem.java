package by.itechart.shop.model;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "cart_item")
public class CartItem {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "product_shop_id")
    private ProductShop productShop;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    private BigDecimal fixedPrice;
    private Integer itemCount;

    public CartItem() {
    }

    public CartItem(ProductShop productShop, User user, BigDecimal fixedPrice, Integer itemCount) {
        this.productShop = productShop;
        this.user = user;
        this.fixedPrice = fixedPrice;
        this.itemCount = itemCount;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public ProductShop getProductShop() {
        return productShop;
    }

    public void setProductShop(ProductShop productShop) {
        this.productShop = productShop;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public BigDecimal getFixedPrice() {
        return fixedPrice;
    }

    public void setFixedPrice(BigDecimal fixedPrice) {
        this.fixedPrice = fixedPrice;
    }

    public Integer getItemCount() {
        return itemCount;
    }

    public void setItemCount(Integer itemCount) {
        this.itemCount = itemCount;
    }
}
