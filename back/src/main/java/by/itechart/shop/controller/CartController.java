package by.itechart.shop.controller;

import by.itechart.shop.controller.request.AddItemToCartRequest;
import by.itechart.shop.controller.request.DeleteItemFromCartRequest;
import by.itechart.shop.controller.request.TokenRequest;
import by.itechart.shop.model.ProductShop;
import by.itechart.shop.security.jwt.JwtTokenProvider;
import by.itechart.shop.service.dto.CartItemDto;
import by.itechart.shop.service.dto.CartItemViewDto;
import by.itechart.shop.service.dto.ProductShopDto;
import by.itechart.shop.service.impl.CartItemServiceImpl;
import by.itechart.shop.service.impl.ProductShopServiceImpl;
import by.itechart.shop.service.impl.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static org.springframework.http.ResponseEntity.ok;

@RestController
public class CartController {

    @Autowired
    CartItemServiceImpl cartItemService;

    @Autowired
    UserServiceImpl userService;

    @Autowired
    ProductShopServiceImpl productShopService;

    @Autowired
    JwtTokenProvider jwtTokenProvider;

    @PostMapping("/cart")
    @CrossOrigin("http://localhost:3000")
    public ResponseEntity addCartItem(@RequestHeader(value="Authorization") String bearerToken,
                                      @RequestBody AddItemToCartRequest data) {

        Integer productShopId = data.getProductShopId();
        BigDecimal fixedPrice = data.getFixedPrice();

        String token = bearerToken.substring(7, bearerToken.length());
        Integer userId = userService.getUserIdByEmail(jwtTokenProvider.getEmail(token));
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


    @GetMapping("/cart")
    @CrossOrigin("http://localhost:3000")
    public List<CartItemViewDto> getCart(@RequestHeader(value="Authorization") String bearerToken){
        String token = bearerToken.substring(7, bearerToken.length());
        Integer userId = userService.getUserIdByEmail(jwtTokenProvider.getEmail(token));

        return cartItemService.getCartItemViewsDto(userId);

    }

    @DeleteMapping("/cart")
    @CrossOrigin("http://localhost:3000")
    public ResponseEntity deleteCartItem(@RequestBody DeleteItemFromCartRequest data) {

        Map<Object, Object> model = new HashMap<>();
        model.put("message", cartItemService.deleteById(data.getCartItemId()));
        return ok(model);
    }

}
