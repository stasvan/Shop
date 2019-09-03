package by.itechart.shop.service.impl;

import by.itechart.shop.model.Phone;
import by.itechart.shop.repository.PhoneRepository;
import by.itechart.shop.service.PhoneService;
import by.itechart.shop.service.dto.PhoneDto;
import by.itechart.shop.service.dto.ProductDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.jdbc.core.JdbcTemplate;
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

    public PhoneDto getPhoneByBrandNameAndModel(String brandName, String model) {
        String brandNameNoHyphen = brandName.replace("-", " ");
        String modelNoHyphen = model.replace("-", " ");
        Phone phone = phoneRepository.findPhoneByBrandNameAndModel(brandNameNoHyphen, modelNoHyphen);
        if (phone == null){
            return null;
        }

        PhoneDto phoneDto = createPhoneDto(phone);
        return phoneDto;
    }

    public PhoneDto getPhoneByProductId(Integer productId) {
        Phone phone = phoneRepository.findPhoneByProductId(productId);
        PhoneDto phoneDto = createPhoneDto(phone);
        return phoneDto;
    }

    public List<PhoneDto> getPhones(Integer page, Integer limit, String brandName, String ram, Integer year) {

        Integer offset = limit * (page - 1);
        Pageable pageable = new PageRequest(page, limit);
        List<Phone> phones = phoneRepository
                .findPhonesByBrandNameAndRamAndYearNamedParams(brandName, ram, year, pageable);

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
        phoneDto.setCamera(phone.getCamera());
        phoneDto.setImageName("http://localhost:8090/image/phone/" + phone.getBrand().getName() + "/" + phone.getImageName());
        return phoneDto;
    }



}
