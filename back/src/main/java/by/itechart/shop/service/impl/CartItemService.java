package by.itechart.shop.service.impl;

import by.itechart.shop.model.CartItem;
import by.itechart.shop.repository.CartItemRepository;
import by.itechart.shop.service.dto.CartItemDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;

@Service("cartItemService")
public class CartItemService {

    @Autowired
    ProductShopServiceImpl productShopService;

    @Autowired
    CartItemRepository cartItemRepository;

    @Autowired
    UserServiceImpl userService;

    public CartItemDto createCartItemDto(Integer userId, Integer productShopId,
                                         BigDecimal fixedPrice, Integer itemCount){
        CartItemDto cartItemDto = new CartItemDto();
        cartItemDto.setFixedPrice(fixedPrice);
        cartItemDto.setItemCount(itemCount);
        cartItemDto.setProductShopId(productShopId);
        cartItemDto.setUserId(userId);
        return cartItemDto;
    }

    public void saveCartItemDto(CartItemDto cartItemDto){
        CartItem cartItem = createCartItem(
                cartItemDto.getProductShopId(),
                cartItemDto.getUserId(),
                cartItemDto.getFixedPrice(),
                cartItemDto.getItemCount()
        );
        cartItemRepository.save(cartItem);
    }

    public CartItem createCartItem(Integer productShopId, Integer userId,
                                   BigDecimal fixedPrice, Integer itemCount){
        return new CartItem(
                productShopService.getProductShopById(productShopId),
                userService.getUserById(userId),
                fixedPrice,
                itemCount
        );
    }

}
