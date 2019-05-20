package by.itechart.shop.controller;

import by.itechart.shop.controller.request.RegistrationRequest;
import by.itechart.shop.service.security.jwt.JwtTokenProvider;
import by.itechart.shop.service.impl.RegistrationServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

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

        return registrationService.registration(
                data.getEmail(), data.getPassword(), data.getRole(),
                data.getName(), data.getSurname(), data.getPhone(),
                data.getCountry(), data.getCity(), data.getStreet(),
                data.getHouse(), data.getApartment()
                );
    }
}