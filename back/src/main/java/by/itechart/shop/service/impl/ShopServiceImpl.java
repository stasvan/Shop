package by.itechart.shop.service.impl;


import by.itechart.shop.model.Address;
import by.itechart.shop.model.Shop;
import by.itechart.shop.model.User;
import by.itechart.shop.repository.ShopRepository;
import by.itechart.shop.service.dto.ShopDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

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

    @Autowired
    AccountServiceImpl accountService;

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
        Shop shop = getShopByUserId(userId);
        if (shop == null){
            return null;
        }
        ShopDto shopDto = createShopDto(shop);
        return shopDto;
    }

    public Shop getShopByUserId(Integer userId){
        Shop shop = shopRepository.findShopByUserId(userId);
        if (shop == null){
            return null;
        }
        return shop;
    }

    public Shop getShopByName(String name){
        return shopRepository.findShopByName(name);
    }

    public Map<String, List<String>> changeShopInfo(Integer userId, String shopName,
                               String description, String phoneNumber,
                               String country, String city,
                               String street, String house,
                               String apartment) {

        List<String> addressDataValidationMessages = addressService
                .validateAddressData(country, city, street, house, apartment);

        List<String> shopInfoValidationMessages = validateShopInfo(userId, shopName, description, phoneNumber);

        Map<String, List<String>> model = new HashMap<>();
        List<String> messages = new LinkedList<>();
        if ((addressDataValidationMessages.isEmpty()) && (shopInfoValidationMessages.isEmpty())) {
            Address address = getShopByUserId(userId).getAddress();
            address.setCountry(country);
            address.setCity(city);
            address.setStreet(street);
            address.setHouse(house);
            address.setApartment(apartment);
            addressService.saveAddress(address);

            Shop shop = getShopByUserId(userId);
            shop.setName(shopName);
            shop.setDescription(description);
            shop.setPhoneNumber(phoneNumber);
            shopRepository.save(shop);

            messages.add("New info saved successfully");
        }else{
            messages.addAll(addressDataValidationMessages);
            messages.addAll(shopInfoValidationMessages);
        }
        model.put("messages", messages);

        return model;

    }

    public List<String> validateShopInfo(Integer userId, String shopName, String description, String phoneNumber){

        List<String> messages = new LinkedList<>();
        Shop shop = getShopByUserId(userId);

        if ((phoneNumber.length() < 17) || (phoneNumber.length() > 30)) {
            String message = "Bad phone";
            messages.add(message);
        }

        if (shop.getName().equals(shopName)){

        }else{
            String verifyMessage = verifyShopName(shopName);
            if (verifyMessage.equals("ok")){
                if ((shopName.length() < 2) || (phoneNumber.length() > 30)) {
                    String message = "Bad name";
                    messages.add(message);
                }
            }else{
                messages.add(verifyMessage);
            }
        }

        return messages;

    }

    public String verifyShopName(String shopName){

        String message = "ok";
        if (getShopByName(shopName) != null) {
            message = "Shop with this name already exists";
        }
        return message;
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
