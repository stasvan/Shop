package by.itechart.shop.repository;

import by.itechart.shop.model.Product;
import by.itechart.shop.model.ProductShop;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductShopRepository extends JpaRepository<ProductShop, Integer> {

    List<ProductShop> findProductShopsByProductId(Integer id);
}
