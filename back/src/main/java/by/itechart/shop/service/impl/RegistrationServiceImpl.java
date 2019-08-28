package by.itechart.shop.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

@Service("registrationService")
public class RegistrationServiceImpl {

    @Autowired
    UserServiceImpl userService;

    @Autowired
    AccountServiceImpl accountService;

    @Autowired
    AddressServiceImpl addressService;

    @Autowired
    PasswordEncoder passwordEncoder;

    public ResponseEntity registration(
            String email, String password, String role,
            String name, String surname, String phone,
            String country, String city, String street,
            String house, String apartment
            ){

        List<String> messages = new LinkedList<>();

        List<String> userDataValidationMessages = userService.validateUserData(role, email, password);
        if (!userDataValidationMessages.isEmpty()){
            messages.addAll(userDataValidationMessages);
        }
        password = passwordEncoder.encode(password);

        String emailVerifyingMessage = userService.verifyEmail(email);
        if (!emailVerifyingMessage.equals("ok")){
            messages.add(emailVerifyingMessage);
        }

        //TODO add avatar
        List<String> accountDataValidationMessages = accountService.validateAccountData(name, surname, phone);
        if (!accountDataValidationMessages.isEmpty()) {
            messages.addAll(accountDataValidationMessages);
        }

        List<String> addressDataValidationMessages = addressService
                .validateAddressData(country, city, street, house, apartment);
        if (!addressDataValidationMessages.isEmpty()) {
            messages.addAll(addressDataValidationMessages);
        }


        Map<String, List<String>> model = new HashMap<>();
        if (messages.isEmpty()) {

            userService.saveUserDto(userService.createUserDto(email, password, role));
            Integer addressId = addressService
                    .saveAddressDto(addressService.createAddressDto(country, city, street, house, apartment));
            DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
            LocalDateTime localDateTime = LocalDateTime.now();
            String registrationDate = dtf.format(localDateTime);
            Integer userId = userService.getUserIdByEmail(email);
            accountService.saveAccountDto(accountService.createAccountDto(
                    userId, addressId, name, surname, registrationDate, phone
            ));

            messages.add("Registration completed successfully");
        }

        model.put("messages", messages);
        return ResponseEntity.status(HttpStatus.OK)
                .body(model);

    }

}
