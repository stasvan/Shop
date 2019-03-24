package by.itechart.shop.service.impl;

import by.itechart.shop.model.Brand;
import by.itechart.shop.repository.BrandRepository;
import by.itechart.shop.service.dto.BrandDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("brandService")
public class BrandServiceImpl {

    @Autowired
    private BrandRepository brandRepository;

    public Brand getBrandById(Integer id){
        return brandRepository.findBrandById(id);
    }


    public BrandDto createBrandDto(Brand brand){
        BrandDto brandDto = new BrandDto();

        brandDto.setId(brand.getId());
        brandDto.setName(brand.getName());
        brandDto.setSite(brand.getSite());

        return brandDto;
    }
}
