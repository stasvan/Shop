package by.itechart.shop.controller;


import by.itechart.shop.service.dto.PhoneDto;
import by.itechart.shop.service.dto.ProductShopDto;
import by.itechart.shop.service.impl.ImageServiceImpl;
import by.itechart.shop.service.impl.PhoneServiceImpl;
import by.itechart.shop.service.impl.ProductShopServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController

public class ProductShopController {

    @Autowired
    ProductShopServiceImpl productShopService;

    @Autowired
    ImageServiceImpl imageService;

//    @GetMapping("/phones")
//    public List<Phone> getPhones(){
//        return phoneService.getAllPhones();
//    }

    @GetMapping("/productShops/{productId}")
    @CrossOrigin("http://localhost:3000")
    public List<ProductShopDto> getProductShopsByProductId(@PathVariable("productId") Integer id){
        return productShopService.getProductShopsByProductId(id);
    }



}