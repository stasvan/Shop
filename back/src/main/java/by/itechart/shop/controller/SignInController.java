package by.itechart.shop.controller;

import by.itechart.shop.controller.request.AuthenticationRequest;
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
public class SignInController {

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    JwtTokenProvider jwtTokenProvider;

    @Autowired
    PasswordEncoder passwordEncoder;

    @Autowired
    UserServiceImpl userService;

    @PostMapping("/signin")
    @CrossOrigin("http://localhost:3000")
    public ResponseEntity signIn(@RequestBody AuthenticationRequest data) {
        try {
            String email = data.getEmail();
            String password = data.getPassword();

            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(email, password));
            System.out.println(email + " " + password);

            String token = jwtTokenProvider.createToken(email, userService.getUserByEmail(email).getRole());
            Integer id = userService.getUserIdByEmail(email);
            System.out.println(token);
            Map<Object, Object> model = new HashMap<>();
            model.put("email", email);
            model.put("token", token);
            model.put("id", id);
            return ok(model);
        } catch (AuthenticationException e) {
            throw new BadCredentialsException("Invalid email/password supplied");
        }
    }
}