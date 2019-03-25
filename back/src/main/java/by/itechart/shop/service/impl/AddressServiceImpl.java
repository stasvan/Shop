package by.itechart.shop.service.impl;


import by.itechart.shop.model.Address;
import by.itechart.shop.service.dto.AddressDto;
import org.springframework.stereotype.Service;

@Service("addressService")
public class AddressServiceImpl {

    public AddressDto createAddressDto(Address address){
        AddressDto addressDto = new AddressDto();

        addressDto.setId(address.getId());
        addressDto.setCountry(address.getCountry());
        addressDto.setCity(address.getCity());
        addressDto.setStreet(address.getStreet());
        addressDto.setHouse(address.getHouse());
        addressDto.setApartment(address.getApartment());

        return addressDto;
    }


}