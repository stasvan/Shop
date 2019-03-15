package by.itechart.shop.service;


import by.itechart.shop.model.Phone;
import by.itechart.shop.repository.PhoneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service("phoneService")
public class PhoneServiceImpl implements PhoneService{

    @Autowired
    private PhoneRepository phoneRepository;

    public List<Phone> getAllPhones() {
        return phoneRepository.findAll();
    }

    public List<Phone> getPhonesByBrand(String name) {
        return phoneRepository.findPhonesByBrandName(name);
    }

//    public List<Phone> getPhones(String brand, String ram) {
//        return phoneRepository.findPhonesByBrandNameAndRam(brand, ram);
//    }
}
