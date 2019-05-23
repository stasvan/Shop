package by.itechart.shop.controller;

import by.itechart.shop.service.impl.ImageServiceImpl;
import by.itechart.shop.service.dto.PhoneDto;
import by.itechart.shop.service.impl.PhoneServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.io.IOException;
import java.util.Map;

import static org.springframework.http.ResponseEntity.ok;


@RestController

public class PhoneController {

    @Autowired
    PhoneServiceImpl phoneService;

    @Autowired
    ImageServiceImpl imageService;

    @GetMapping("/phones/{brandName}/{model}")
    @CrossOrigin("http://localhost:3000")
    public PhoneDto getPhoneByBrandNameAndModel(@PathVariable("brandName") String brandName,
                                                @PathVariable("model") String model){
        return phoneService.getPhoneByBrandNameAndModel(brandName, model);
    }


    @GetMapping("/phones/page/{page}/{limit}")
    @CrossOrigin("http://localhost:3000")
    public ResponseEntity getPhones(@PathVariable(name="page", required = true) Integer page,
                                    @PathVariable(name="limit", required = true) Integer limit,
                                    @RequestParam(name="brand", required = false) String brandName,
                                    @RequestParam(name="year", required = false) Integer year,
                                    @RequestParam(name="ram", required = false) String ram){

        List<PhoneDto> phones = phoneService.getPhones(page, limit, brandName, ram, year);

        //todo later update phoneService.getPhonesCount with params for paging with filters
        Long phonesCount = phoneService.getPhonesCount(brandName, ram, year);

        Map<Object, Object> model = new HashMap<>();
        model.put("phones", phones);
        System.out.println(phonesCount);
        model.put("phonesCount", phonesCount);
        return ok(model);
    }

}