package by.itechart.shop.service.impl;


import by.itechart.shop.model.Phone;
import by.itechart.shop.repository.PhoneRepository;
import by.itechart.shop.service.PhoneService;
import by.itechart.shop.service.dto.PhoneDto;
import by.itechart.shop.service.dto.ProductDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service("phoneService")
public class PhoneServiceImpl implements PhoneService {

    @Autowired
    private PhoneRepository phoneRepository;

    @Autowired
    private BrandServiceImpl brandService;

    @Autowired
    private ProductServiceImpl productService;

    public List<PhoneDto> getAllPhones() {
        List<Phone> phones = phoneRepository.findAll();
        List<PhoneDto> phonesDto = new ArrayList<>();
        for (Phone phone: phones) {
            phonesDto.add(createPhoneDto(phone));
        }

        return phonesDto;
    }

    public PhoneDto getPhoneById(Integer id) {
        Phone phone = phoneRepository.findPhoneById(id);
        PhoneDto phoneDto = createPhoneDto(phone);
        return phoneDto;
    }

    public List<PhoneDto> getPhonesByBrand(String name) {
        List<Phone> phones = phoneRepository.findPhonesByBrandName(name);
        List<PhoneDto> phonesDto = new ArrayList<>();
        for (Phone phone: phones) {
            phonesDto.add(createPhoneDto(phone));
        }

        return phonesDto;
    }

    public PhoneDto createPhoneDto(Phone phone){
        PhoneDto phoneDto = new PhoneDto();

        phoneDto.setId(phone.getId());
        phoneDto.setBrand(brandService.createBrandDto(phone.getBrand()));
        phoneDto.setProduct(productService.createProductDto(phone.getProduct()));
        phoneDto.setModel(phone.getModel());
        phoneDto.setYear(phone.getYear());
        phoneDto.setCpu(phone.getCpu());
        phoneDto.setRam(phone.getRam());
        phoneDto.setScreenResolution(phone.getScreenResolution());
        phoneDto.setScreenTechnology(phone.getScreenTechnology());
        phoneDto.setImageName("http://localhost:8090/image/phone/" + phone.getBrand().getName() + "/" + phone.getImageName());
        return phoneDto;
    }



}
