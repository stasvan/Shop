package by.itechart.shop.service.impl;


import by.itechart.shop.model.Brand;
import by.itechart.shop.model.Phone;
import by.itechart.shop.repository.PhoneRepository;
import by.itechart.shop.service.PhoneService;
import by.itechart.shop.service.dto.PhoneDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service("phoneService")
public class PhoneServiceImpl implements PhoneService {

    @Autowired
    private PhoneRepository phoneRepository;

    public List<PhoneDto> getAllPhones() {
        List<Phone> phones = phoneRepository.findAll();
        List<PhoneDto> phonesDto = new ArrayList<>();
        for (Phone phone: phones) {
            phonesDto.add(createPhoneDtoFromPhone(phone));
        }

        return phonesDto;
    }

    public PhoneDto getPhoneById(Integer id) {
        Phone phone = phoneRepository.findPhoneById(id);
        PhoneDto pDto = createPhoneDtoFromPhone(phone);
        return pDto;
    }

    public List<PhoneDto> getPhonesByBrand(String name) {
        List<Phone> phones = phoneRepository.findPhonesByBrandName(name);
        List<PhoneDto> phonesDto = new ArrayList<>();
        for (Phone phone: phones) {
            phonesDto.add(createPhoneDtoFromPhone(phone));
        }

        return phonesDto;
    }

    private PhoneDto createPhoneDtoFromPhone(Phone phone){
        PhoneDto pDto = new PhoneDto();
        pDto.setBrand(phone.getBrand().getName());
        pDto.setId(phone.getId());
        pDto.setProductId(phone.getProduct().getId());
        pDto.setModel(phone.getModel());
        pDto.setYear(phone.getYear());
        pDto.setCpu(phone.getCpu());
        pDto.setRam(phone.getRam());
        pDto.setScreenResolution(phone.getScreenResolution());
        pDto.setScreenTechnology(phone.getScreenTechnology());
        pDto.setImageName("http://localhost:8090/phones/image/" + phone.getImageName());
        return pDto;
    }



}
