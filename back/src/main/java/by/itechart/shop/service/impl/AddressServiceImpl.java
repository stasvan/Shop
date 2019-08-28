package by.itechart.shop.service.impl;


import by.itechart.shop.model.Address;
import by.itechart.shop.repository.AddressRepository;
import by.itechart.shop.service.dto.AddressDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.LinkedList;
import java.util.List;

@Service("addressService")
public class AddressServiceImpl {

    @Autowired
    AddressRepository addressRepository;

    @Autowired
    AccountServiceImpl accountService;

    //without id for POST
    public AddressDto createAddressDto(String country, String city,
                                       String street, String house, String apartment){
        AddressDto addressDto = new AddressDto();

        addressDto.setCountry(country);
        addressDto.setCity(city);
        addressDto.setStreet(street);
        addressDto.setHouse(house);
        addressDto.setApartment(apartment);

        return addressDto;
    }

    //with id for GET
    public AddressDto createAddressDto(Integer id, String country, String city,
                                       String street, String house, String apartment){
        AddressDto addressDto = new AddressDto();

        addressDto.setId(id);
        addressDto.setCountry(country);
        addressDto.setCity(city);
        addressDto.setStreet(street);
        addressDto.setHouse(house);
        addressDto.setApartment(apartment);

        return addressDto;
    }

    public Address createAddress(String country, String city,
                                 String street, String house, String apartment){
        Address address = new Address();
        address.setCountry(country);
        address.setCity(city);
        address.setStreet(street);
        address.setHouse(house);
        address.setApartment(apartment);

        return address;
    }

    public Integer saveAddressDto(AddressDto addressDto){
        Address address = createAddress(
                addressDto.getCountry(),
                addressDto.getCity(),
                addressDto.getStreet(),
                addressDto.getHouse(),
                addressDto.getApartment()
        );
        return saveAddress(address);
    }

    private Integer saveAddress(Address address){
        Address saved = addressRepository.save(address);
        return saved.getId();
    }

    public Address getAddressById(Integer addressId){
        return addressRepository.findAddressById(addressId);
    }

    public AddressDto getAddressDtoById(Integer id){
        Address address = getAddressById(id);
        AddressDto addressDto = createAddressDto(
                address.getId(),
                address.getCountry(),
                address.getCity(),
                address.getStreet(),
                address.getHouse(),
                address.getApartment()
        );
        return addressDto;
    }

    public AddressDto getAddressDtoByUserId(Integer userId){
        Integer addressId = accountService.getAccountByUserId(userId).getAddress().getId();
        AddressDto addressDto = getAddressDtoById(addressId);
        return addressDto;
    }

    public List<String> validateAddressData(String country, String city, String street,
                                      String house, String apartment){

        List<String> messages = new LinkedList<>();

        //TODO create better data validation
        if ((country.length() < 2) || (country.length() > 20)) {
            String message = "Bad country";
            messages.add(message);
        }

        if ((city.length() < 2) || (city.length() > 20)) {
            String message = "Bad city";
            messages.add(message);
        }

        if ((street.length() < 2) || (street.length() > 20)) {
            String message = "Bad street";
            messages.add(message);
        }

        if ((house.length() < 1) || (house.length() > 6)) {
            String message = "Bad house";
            messages.add(message);
        }

        if ((apartment != null) && ((apartment.length() < 1) || (apartment.length() > 6))) {
            String message = "Bad apartment";
            messages.add(message);
        }

        return messages;
    }
}