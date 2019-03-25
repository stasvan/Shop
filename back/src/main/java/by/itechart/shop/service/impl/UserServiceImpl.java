package by.itechart.shop.service.impl;

import by.itechart.shop.model.User;
import by.itechart.shop.service.dto.UserDto;
import org.springframework.stereotype.Service;

@Service("userService")
public class UserServiceImpl {

    public UserDto createUserDto(User user){
        UserDto userDto = new UserDto();

        userDto.setId(user.getId());
        userDto.setEmail(user.getEmail());
        userDto.setPassword(user.getPassword());
        userDto.setRole(user.getRole());

        return userDto;
    }

}
