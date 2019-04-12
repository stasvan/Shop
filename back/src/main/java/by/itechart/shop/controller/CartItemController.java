package by.itechart.shop.controller;

import by.itechart.shop.controller.request.AddItemToCartRequest;
import by.itechart.shop.model.CartItem;
import by.itechart.shop.repository.CartItemRepository;
import by.itechart.shop.service.impl.CartItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.Map;

import static org.springframework.http.ResponseEntity.ok;

@RestController
public class CartItemController {


    @Autowired
    CartItemService cartItemService;

    @PostMapping("/cart")
    @CrossOrigin("http://localhost:3000")
    public ResponseEntity signIn(@RequestBody AddItemToCartRequest data) {

        Integer userId = data.getUserId();
        Integer productShopId = data.getProductShopId();
        BigDecimal fixedPrice = data.getFixedPrice();
        Integer itemCount = data.getItemCount();

        cartItemService.saveCartItemDto(cartItemService.createCartItemDto(userId, productShopId, fixedPrice, itemCount));
       // cartRepository.save(cartItemService.createCartItem(userId, productShopId, fixedPrice, itemCount));

        String message = userId + " " + productShopId + " CartItem is created";
        Map<Object, Object> model = new HashMap<>();
        model.put("message", message);
        return ok(model);
    }
}
