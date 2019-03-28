package by.itechart.shop.repository;

import by.itechart.shop.model.Shop;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ShopRepository extends JpaRepository<Shop, Integer> {
    List<Shop> findShopById(Integer id);
}
