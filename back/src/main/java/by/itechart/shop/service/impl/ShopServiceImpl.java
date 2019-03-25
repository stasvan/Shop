package by.itechart.shop.service.impl;


import by.itechart.shop.model.Shop;
import by.itechart.shop.service.dto.ShopDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("shopService")
public class ShopServiceImpl {


    @Autowired
    ProductTypeServiceImpl productTypeService;

    @Autowired
    UserServiceImpl userService;

    @Autowired
    AddressServiceImpl addressService;

    public ShopDto createShopDto(Shop shop){
        ShopDto shopDto = new ShopDto();

        shopDto.setId(shop.getId());
        shopDto.setUser(userService.createUserDto(shop.getUser()));
        shopDto.setName(shop.getName());
        shopDto.setAddress(addressService.createAddressDto(shop.getAddress()));
        shopDto.setPhoneNumber(shop.getPhoneNumber());
        shopDto.setDescription(shop.getDescription());
        shopDto.setImageName("http://localhost:8090/image/shop/" + shop.getImageName());

        return shopDto;
    }


}
