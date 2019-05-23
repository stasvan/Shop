package by.itechart.shop.controller;

import by.itechart.shop.service.dto.PhoneDto;
import by.itechart.shop.service.dto.ProductShopDto;
import by.itechart.shop.service.impl.ImageServiceImpl;
import by.itechart.shop.service.impl.PhoneServiceImpl;
import by.itechart.shop.service.impl.ProductShopServiceImpl;
import by.itechart.shop.service.impl.ProductTypeServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController

public class ProductTypeController {

    @Autowired
    ProductTypeServiceImpl productTypeService;

    @GetMapping("/productTypes")
    @CrossOrigin("http://localhost:3000")
    public List<String> getProductTypes(){
        return productTypeService.getProductTypes();
    }

    @GetMapping("/productsByType")
    @CrossOrigin("http://localhost:3000")
    public List<String> getProductsByType(@RequestParam(name="type") String type){
        return productTypeService.getProductsByType(type);
    }

}