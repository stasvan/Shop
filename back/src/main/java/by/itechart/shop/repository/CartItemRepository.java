package by.itechart.shop.repository;

import by.itechart.shop.model.CartItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartItemRepository extends JpaRepository<CartItem, Integer> {

    CartItem findCartItemByProductShopIdAndUserId(Integer productShopId, Integer userId);


}
