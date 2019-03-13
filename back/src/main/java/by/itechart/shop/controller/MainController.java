package by.itechart.shop.controller;

import by.itechart.shop.model.User;
import by.itechart.shop.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;


import java.util.Map;

@Controller
public class MainController {
    @Autowired
    private UserRepo userRepo;

    @GetMapping
    public String main(Map<String, Object> model) {
        Iterable<User> users = userRepo.findAll();
        model.put("users", users);
        return "main";
    }

    @PostMapping
    public String add(@RequestParam String name, @RequestParam String email, Map<String, Object> model){
        User user = new User(name, email);
        if ((!name.equals("")) && (!email.equals("")))
            userRepo.save(user);

        Iterable<User> users = userRepo.findAll();
        model.put("user", users);

        return "main";
    }

}