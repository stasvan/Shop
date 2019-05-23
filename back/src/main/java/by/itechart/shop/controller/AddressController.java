package by.itechart.shop.controller;

import by.itechart.shop.service.dto.AddressDto;
import by.itechart.shop.service.impl.*;
import by.itechart.shop.service.dto.PhoneDto;
import by.itechart.shop.service.security.jwt.JwtTokenProvider;
import org.hibernate.engine.jdbc.StreamUtils;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.core.io.ClassPathResource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;
import java.util.List;
import java.io.IOException;
import java.util.Map;

import static org.springframework.http.ResponseEntity.ok;


@RestController

public class AddressController {

    @Autowired
    AddressServiceImpl addressService;

    @Autowired
    UserServiceImpl userService;

    @Autowired
    AccountServiceImpl accountService;

    @Autowired
    JwtTokenProvider jwtTokenProvider;

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
    @GetMapping("/address/user")
    @CrossOrigin("http://localhost:3000")
    public AddressDto getUserAddress(@RequestHeader(value = "Authorization") String bearerToken) {
        String token = bearerToken.substring(7, bearerToken.length());
        Integer userId = userService.getUserIdByEmail(jwtTokenProvider.getEmail(token));
        AddressDto addressDto = addressService.getAddressDtoByUserId(userId);
        return addressDto;
    }
}