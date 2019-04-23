package by.itechart.shop.controller;

import by.itechart.shop.controller.request.AddItemToCartRequest;
import by.itechart.shop.service.impl.CartItemServiceImpl;
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
    CartItemServiceImpl cartItemService;

    @PostMapping("/cart")
    @CrossOrigin("http://localhost:3000")
    public ResponseEntity addCartItem(@RequestBody AddItemToCartRequest data) {

        Integer userId = data.getUserId();
        Integer productShopId = data.getProductShopId();
        BigDecimal fixedPrice = data.getFixedPrice();

        Map<Object, Object> model = new HashMap<>();
        String message;
        if (!cartItemService.isCartItemExist(userId, productShopId)){
            cartItemService.saveCartItemDto(cartItemService.createCartItemDto(userId, productShopId, fixedPrice));
            message = "Item added successfully";
        } else {
            message = "You have already added this item";
        }
        model.put("message", message);
        return ok(model);
    }
}
