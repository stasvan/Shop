package by.itechart.shop.service.impl;


import by.itechart.shop.model.Address;
import by.itechart.shop.model.Shop;
import by.itechart.shop.model.User;
import by.itechart.shop.repository.ShopRepository;
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
    ShopRepository shopRepository;

    @Autowired
    AddressServiceImpl addressService;

    public ShopDto createShopDto(Shop shop){
        ShopDto shopDto = new ShopDto();

        shopDto.setId(shop.getId());
        User user = shop.getUser();
        shopDto.setUserId(user.getId());
        shopDto.setName(shop.getName());
        Address address = shop.getAddress();
        shopDto.setAddress(addressService.createAddressDto(
                address.getId(),
                address.getCountry(),
                address.getCity(),
                address.getStreet(),
                address.getHouse(),
                address.getApartment()
                ));
        shopDto.setPhoneNumber(shop.getPhoneNumber());
        shopDto.setDescription(shop.getDescription());
        shopDto.setImageName("http://localhost:8090/image/shop/" + shop.getImageName());

        return shopDto;
    }

    public ShopDto getShopDtoByUserId(Integer userId){
        Shop shop = shopRepository.findShopByUserId(userId);
        if (shop == null){
            return null;
        }
        ShopDto shopDto = createShopDto(shop);
        return shopDto;
    }

//    public void saveShop(Integer userId, String shopName, String description,
//                         String phoneNumber, String imageName,
//                         String country, String city, String street,
//                         String house, String apartment){
//
//        Shop shop = shopRepository.findShopByUserId(userId);
//        if (shop == null){
//            return null;
//        } else{
//
//        }
//
//    }


}
