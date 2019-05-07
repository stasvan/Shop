package by.itechart.shop.controller;

import by.itechart.shop.controller.request.TokenRequest;
import by.itechart.shop.security.jwt.JwtTokenProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

import static org.springframework.http.ResponseEntity.ok;

@RestController
public class TokenValidationController {

    @Autowired
    JwtTokenProvider jwtTokenProvider;

    @PostMapping("/validateJwt")
    @CrossOrigin("http://localhost:3000")
    public ResponseEntity validateJwt(@RequestBody TokenRequest data) {
        String token = data.getToken();
        System.out.println(token + " came");

        Map<Object, Object> model = new HashMap<>();
        String message;
        if (jwtTokenProvider.validateToken(token)){
            message = "valid";
        }else{
            message = "expired";
        }
        model.put("message", message);
        return ok(model);
    }
}
