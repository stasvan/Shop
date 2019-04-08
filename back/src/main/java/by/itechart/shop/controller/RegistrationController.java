package by.itechart.shop.controller;

import by.itechart.shop.controller.request.AuthenticationRequest;
import by.itechart.shop.controller.request.RegistrationRequest;
import by.itechart.shop.repository.UserRepository;
import by.itechart.shop.security.jwt.JwtTokenProvider;
import by.itechart.shop.service.impl.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
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
    UserRepository userRepository;

    @Autowired
    PasswordEncoder passwordEncoder;

    @Autowired
    UserServiceImpl userService;

    @PostMapping("/registration")
    @CrossOrigin("http://localhost:3000")
    public ResponseEntity signUp(@RequestBody RegistrationRequest data) {
        try {
            System.out.println(data);
            String email = data.getEmail();
            String password = passwordEncoder.encode(data.getPassword());
            String name = data.getName();
            String lastName = data.getLastName();
            String role = data.getRole();

            Map<Object, Object> model = new HashMap<>();
            userRepository.save(userService.createUser(email, password, role));
            String message = email + " user is created";
            model.put("message", message);
            return ok(model);
        } catch (AuthenticationException e) {
            throw new BadCredentialsException("Invalid username/password supplied");
        }
    }
}