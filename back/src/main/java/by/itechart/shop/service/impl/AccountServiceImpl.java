package by.itechart.shop.service.impl;

import by.itechart.shop.model.Account;
import by.itechart.shop.repository.AccountRepository;
import by.itechart.shop.repository.AddressRepository;
import by.itechart.shop.repository.UserRepository;
import by.itechart.shop.service.dto.AccountDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.security.PublicKey;

@Service("accountService")
public class AccountServiceImpl {

    @Autowired
    AccountRepository accountRepository;

    @Autowired
    UserServiceImpl userService;

    @Autowired
    AddressServiceImpl addressService;

    //without id for POST
    public AccountDto createAccountDto(Integer userId, Integer addressId,
                                       String name, String surname, String registrationDate, String phone){
        AccountDto accountDto = new AccountDto();

        accountDto.setUserId(userId);
        accountDto.setAddressId(addressId);
        accountDto.setName(name);
        accountDto.setSurname(surname);
        accountDto.setRegistrationDate(registrationDate);
        accountDto.setPhone(phone);

        return accountDto;
    }

    public Account createAccount(Integer userId, Integer addressId,
                                 String name, String surname, String registrationDate, String phone){
        Account account = new Account();
        account.setUser(userService.getUserById(userId));
        account.setAddress(addressService.getAddressById(addressId));
        account.setName(name);
        account.setSurname(surname);
        account.setRegistrationDate(registrationDate);
        account.setPhone(phone);
        //stub for avatar
        account.setAvatar("empty.png");

        return account;
    }

    public void saveAccountDto(AccountDto accountDto){
        Account account  = createAccount(
                accountDto.getUserId(),
                accountDto.getAddressId(),
                accountDto.getName(),
                accountDto.getSurname(),
                accountDto.getRegistrationDate(),
                accountDto.getPhone()
        );
        saveAccount(account);
    }

    private void saveAccount(Account account){
        accountRepository.save(account);
    }


    public String validateAccountData(String name, String surname, String phone){
        String message = "ok";

        if ((name.length() < 1) || (name.length() > 20)) {
            message = "Bad name";
            return message;
        }

        if ((surname.length() < 1) || (surname.length() > 20)) {
            message = "Bad surname";
            return message;
        }

        if ((phone.length() < 8) || (phone.length() > 18)) {
            message = "Bad phone";
            return message;
        }

        return message;
    }

}
