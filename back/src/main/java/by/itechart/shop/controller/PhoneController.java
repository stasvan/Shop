package by.itechart.shop.controller;

import by.itechart.shop.service.impl.ImageServiceImpl;
import by.itechart.shop.service.dto.PhoneDto;
import by.itechart.shop.service.impl.PhoneServiceImpl;
import org.hibernate.engine.jdbc.StreamUtils;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.core.io.ClassPathResource;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.util.List;
import java.io.IOException;


@RestController

public class PhoneController {

    @Autowired
    PhoneServiceImpl phoneService;

    @Autowired
    ImageServiceImpl imageService;

//    @GetMapping("/phones")
//    public List<Phone> getPhones(){
//        return phoneService.getAllPhones();
//    }

//    @GetMapping("/phones/{phoneId}")
//    @CrossOrigin("http://localhost:3000")
//    public PhoneDto getPhoneById(@PathVariable("phoneId") Integer id){
//        return phoneService.getPhoneById(id);
//    }
//
//
    @GetMapping("/phones/{brandName}/{model}")
    @CrossOrigin("http://localhost:3000")
    public PhoneDto getPhoneByBrandNameAndModel(@PathVariable("brandName") String brandName,
                                                @PathVariable("model") String model){
        return phoneService.getPhoneByBrandNameAndModel(brandName, model);
    }


    @GetMapping("/phones/page/{page}/{limit}")
    @CrossOrigin("http://localhost:3000")
    public List<PhoneDto> getPhones(@PathVariable(name="page", required = true) Integer page,
                                    @PathVariable(name="limit", required = true) Integer limit,
                                    @RequestParam(name="brand", required = false) String brandName,
                                    @RequestParam(name="year", required = false) Integer year,
                                    @RequestParam(name="ram", required = false) String ram){

        List<PhoneDto> phones = phoneService.getPhones(page, limit, brandName, ram, year);

        return phones;
    }


}