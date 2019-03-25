package by.itechart.shop.model;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "product")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "type_id")
    private ProductType productType;

    @OneToOne(mappedBy = "product")
    private Phone phone;

    @OneToMany(mappedBy = "product")
    private List<ProductShop> productShops = new ArrayList<ProductShop>();

    public Product() {
    }

    public Product(ProductType productType) {
        this.productType = productType;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public ProductType getProductType() {
        return productType;
    }

    public void setProductType(ProductType productType) {
        this.productType = productType;
    }
}
