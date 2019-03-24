package by.itechart.shop.service.impl;


import by.itechart.shop.model.Product;
import by.itechart.shop.service.dto.ProductDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("productService")
public class ProductServiceImpl {

    @Autowired
    ProductTypeServiceImpl productTypeService;

    public ProductDto createProductDto(Product product){
        ProductDto productDto = new ProductDto();

        productDto.setId(product.getId());
        productDto.setProductType(productTypeService.createProductTypeDto(product.getProductType()));

        return productDto;
    }
}
