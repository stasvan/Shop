package by.itechart.shop.service.impl;


import by.itechart.shop.model.Address;
import by.itechart.shop.repository.AddressRepository;
import by.itechart.shop.service.dto.AddressDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("addressService")
public class AddressServiceImpl {

    @Autowired
    AddressRepository addressRepository;

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

    public void saveAddressDto(AddressDto addressDto){
        Address address = createAddress(
                addressDto.getCountry(),
                addressDto.getCity(),
                addressDto.getStreet(),
                addressDto.getHouse(),
                addressDto.getApartment()
        );
        saveAddress(address);
    }

    private void saveAddress(Address address){
        addressRepository.save(address);
    }

    public Integer getAddressId(String country, String city,
                                String street, String house, String apartment){
        return addressRepository.findAddressByCountryAndCityAndStreetAndHouseAndApartment(
                country, city, street, house, apartment
        ).getId();
    }

    public Address getAddressById(Integer addressId){
        return addressRepository.findAddressById(addressId);
    }

    public String validateAddressData(String country, String city, String street,
                                      String house, String apartment){
        String message = "ok";

        if ((country.length() < 2) || (country.length() > 20)) {
            message = "Bad country";
            return message;
        }

        if ((city.length() < 2) || (city.length() > 20)) {
            message = "Bad city";
            return message;
        }

        if ((street.length() < 2) || (street.length() > 20)) {
            message = "Bad street";
            return message;
        }

        if ((house.length() < 1) || (house.length() > 6)) {
            message = "Bad house";
            return message;
        }

        if ((apartment.length() < 1) || (apartment.length() > 6)) {
            message = "Bad apartment";
            return message;
        }

        return message;
    }
}