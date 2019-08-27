package by.itechart.shop.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.HashMap;
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

        Map<Object, Object> model = new HashMap<>();

        String userDataValidationMessage = userService.validateUserData(role, email, password);
        if (!userDataValidationMessage.equals("ok")){
            model.put("message", userDataValidationMessage);
            return ResponseEntity.status(HttpStatus.CONFLICT )
                    .body(model);
        }
        password = passwordEncoder.encode(password);

        String emailVerifyingMessage = userService.verifyEmail(email);
        if (!emailVerifyingMessage.equals("ok")){
            model.put("message", emailVerifyingMessage);
            return ResponseEntity.status(HttpStatus.CONFLICT )
                    .body(model);
        }

        //TODO add avatar
        String accountDataValidationMessage = accountService.validateAccountData(name, surname, phone);
        if (!accountDataValidationMessage.equals("ok")) {
            model.put("message", accountDataValidationMessage);
            return ResponseEntity.status(HttpStatus.CONFLICT)
                    .body(model);
        }

        String addressDataValidationMessage = addressService
                .validateAddressData(country, city, street, house, apartment);
        if (!addressDataValidationMessage.equals("ok")) {
            model.put("message", addressDataValidationMessage);
            return ResponseEntity.status(HttpStatus.CONFLICT)
                    .body(model);
        }

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


        model.put("message", "Registration completed successfully");

        return ResponseEntity.status(HttpStatus.OK)
                .body(model);

    }

}
