package by.itechart.shop.service.impl;

import by.itechart.shop.model.Brand;
import by.itechart.shop.repository.BrandRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BrandServiceImpl {

    @Autowired
    private BrandRepository brandRepository;

    public Brand getBrandById(Integer id){
        return brandRepository.findBrandById(id);
    }

}
