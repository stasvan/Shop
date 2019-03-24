package by.itechart.shop.service.impl;

import by.itechart.shop.model.ProductType;
import by.itechart.shop.service.dto.ProductTypeDto;
import org.springframework.stereotype.Service;

@Service("productTypeService")
public class ProductTypeServiceImpl {

    public ProductTypeDto createProductTypeDto(ProductType productType){
        ProductTypeDto productTypeDto = new ProductTypeDto();

        productTypeDto.setId(productType.getId());
        productTypeDto.setName(productType.getName());

        return productTypeDto;
    }
}
