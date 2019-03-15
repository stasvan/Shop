package by.itechart.shop.controller;


import by.itechart.shop.model.Phone;
import by.itechart.shop.repository.PhoneRepository;
import by.itechart.shop.service.PhoneService;
import by.itechart.shop.service.PhoneServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController

public class PhoneController {

    @Autowired
    PhoneServiceImpl phoneService;
//
//    @GetMapping("/phones")
//    public List<Phone> getPhones(){
//        return phoneService.getAllPhones();
//    }

    @GetMapping("/phones")
    public List<Phone> getPhones(@RequestParam(name="brand", required = false) String brand){
        List<Phone> phones;
        if (brand == null){
            phones = phoneService.getAllPhones();
        }else{
            phones = phoneService.getPhonesByBrand(brand);
        }

        return phones;
    }




}