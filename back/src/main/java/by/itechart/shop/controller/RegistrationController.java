package by.itechart.shop.controller;

import by.itechart.shop.controller.request.AuthenticationRequest;
import by.itechart.shop.controller.request.RegistrationRequest;
import by.itechart.shop.repository.UserRepository;
import by.itechart.shop.security.jwt.JwtTokenProvider;
import by.itechart.shop.service.impl.AccountServiceImpl;
import by.itechart.shop.service.impl.AddressServiceImpl;
import by.itechart.shop.service.impl.RegistrationServiceImpl;
import by.itechart.shop.service.impl.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

import static org.springframework.http.ResponseEntity.ok;

@RestController
public class RegistrationController {

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    JwtTokenProvider jwtTokenProvider;

    @Autowired
    RegistrationServiceImpl registrationService;

    @PostMapping("/registration")
    @CrossOrigin("http://localhost:3000")
    public ResponseEntity signUp(@RequestBody RegistrationRequest data) {
        System.out.println(data);

        String email = data.getEmail();
        String password = data.getPassword();
        String role = data.getRole();
        String name = data.getName();
        String surname = data.getSurname();
        String phone = data.getPhone();

        String country = data.getCountry();
        String city = data.getCity();
        String street = data.getStreet();
        String house = data.getHouse();
        String apartment = data.getApartment();

        return registrationService.registration(
                email, password, role,
                name, surname, phone,
                country, city, street, house, apartment
                );
    }
}