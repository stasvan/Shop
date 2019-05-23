package by.itechart.shop.controller;

import by.itechart.shop.controller.request.SaveShopInfoRequest;
import by.itechart.shop.service.dto.PhoneDto;
import by.itechart.shop.service.dto.ShopDto;
import by.itechart.shop.service.impl.ImageServiceImpl;
import by.itechart.shop.service.impl.PhoneServiceImpl;
import by.itechart.shop.service.impl.ShopServiceImpl;
import by.itechart.shop.service.impl.UserServiceImpl;
import by.itechart.shop.service.security.jwt.JwtTokenProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

import static org.springframework.http.ResponseEntity.ok;

@RestController

public class ShopController {

    @Autowired
    ShopServiceImpl shopService;

    @Autowired
    UserServiceImpl userService;

    @Autowired
    JwtTokenProvider jwtTokenProvider;

    @GetMapping("/shop")
    @CrossOrigin("http://localhost:3000")
    public ResponseEntity getShopInfo(@RequestHeader(value="Authorization") String bearerToken){
        String token = bearerToken.substring(7, bearerToken.length());
        Integer userId = userService.getUserIdByEmail(jwtTokenProvider.getEmail(token));

        String message = "";
        Map<Object, Object> model = new HashMap<>();
        ShopDto shopDto = shopService.getShopDtoByUserId(userId);
        if (shopDto == null){
            message = "shop does not exist";
        } else{
            message = "shop exists";
        }
        model.put("message", message);
        model.put("shop", shopDto);
        return ok(model);
    }

//    @PostMapping("/shop")
//    @CrossOrigin("http://localhost:3000")
//    public ResponseEntity saveShopInfo(@RequestHeader(value="Authorization") String bearerToken,
//                                       @RequestBody SaveShopInfoRequest data){
//        String token = bearerToken.substring(7, bearerToken.length());
//        Integer userId = userService.getUserIdByEmail(jwtTokenProvider.getEmail(token));
//
//        shopService.saveShop(
//                userId, data.getShopName(), data.getDescription(),
//                data.getPhoneNumber(), data.getImageName(),
//                data.getCountry(), data.getCity(), data.getStreet(),
//                data.getHouse(), data.getApartment()
//        );
//
//        String message = "";
//        Map<Object, Object> model = new HashMap<>();
//        ShopDto shopDto = shopService.getShopDtoByUserId(userId);
//        if (shopDto == null){
//            message = "shop does not exist";
//        } else{
//            message = "shop exists";
//        }
//        model.put("message", message);
//        model.put("shop", shopDto);
//        return ok(model);
//    }

}