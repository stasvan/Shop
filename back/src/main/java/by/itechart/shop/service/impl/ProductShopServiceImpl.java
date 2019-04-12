package by.itechart.shop.service.impl;


import by.itechart.shop.model.Product;
import by.itechart.shop.model.ProductShop;
import by.itechart.shop.repository.ProductShopRepository;
import by.itechart.shop.service.dto.ProductDto;
import by.itechart.shop.service.dto.ProductShopDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service("productShopService")
public class ProductShopServiceImpl {

    @Autowired
    ProductShopRepository productShopRepository;

    @Autowired
    ProductServiceImpl productService;

    @Autowired
    ShopServiceImpl shopService;

    public ProductShop getProductShopById(Integer productShopId){
        return productShopRepository.findProductShopById(productShopId);
    }

    public List<ProductShopDto> getProductShopsByProductId(Integer id) {
        List<ProductShop> productShops = productShopRepository.findProductShopsByProductId(id);
        List<ProductShopDto> productShopsDto = new ArrayList<>();
        for (ProductShop productShop: productShops
             ) {
            productShopsDto.add(createProductShopDto(productShop));
        }

        return productShopsDto;
    }

    public ProductShopDto createProductShopDto(ProductShop productShop){
        ProductShopDto productShopDto = new ProductShopDto();

        productShopDto.setId(productShop.getId());
        productShopDto.setProduct(productService.createProductDto(productShop.getProduct()));
        productShopDto.setShop(shopService.createShopDto(productShop.getShop()));
        productShopDto.setPrice(productShop.getPrice());

        return productShopDto;
    }
}
