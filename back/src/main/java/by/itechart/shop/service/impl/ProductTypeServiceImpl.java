package by.itechart.shop.service.impl;

import by.itechart.shop.model.ProductType;
import by.itechart.shop.repository.ProductTypeRepository;
import by.itechart.shop.service.dto.ProductTypeDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service("productTypeService")
public class ProductTypeServiceImpl {

    @Autowired
    ProductTypeRepository productTypeRepository;

    public ProductTypeDto createProductTypeDto(ProductType productType){
        ProductTypeDto productTypeDto = new ProductTypeDto();

        productTypeDto.setId(productType.getId());
        productTypeDto.setName(productType.getName());

        return productTypeDto;
    }

    public List<String> getProductTypes(){
        List<ProductType> productTypes = productTypeRepository.findAll();
        List<String> productTypesStrings = new ArrayList<>();
        for (ProductType productType: productTypes
             ) {
            productTypesStrings.add(productType.getName());
        }
        return productTypesStrings;
    }

    public List<String> getProductsByType(String type){
        
    }

}
