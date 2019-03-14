package by.itechart.shop.controller;


import by.itechart.shop.model.Phone;
import by.itechart.shop.repository.PhoneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class PhoneController {

    @Autowired
    PhoneRepository phoneRepository;

    @GetMapping("/phones")
    public List<Phone> phones(){
        return phoneRepository.findAll();
    }


}