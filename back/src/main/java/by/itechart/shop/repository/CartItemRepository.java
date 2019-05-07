package by.itechart.shop.repository;

import by.itechart.shop.model.CartItem;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CartItemRepository extends JpaRepository<CartItem, Integer> {

    CartItem findCartItemByProductShopIdAndUserId(Integer productShopId, Integer userId);
    List<CartItem> findCartItemByUserId(Integer userId);


}
