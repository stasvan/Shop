package by.itechart.shop.service.impl;

import by.itechart.shop.model.User;
import by.itechart.shop.repository.UserRepository;
import by.itechart.shop.service.dto.UserDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("userService")
public class UserServiceImpl {

    @Autowired
    UserRepository userRepository;

    public UserDto getUserByUsername(String name) {
        User user = userRepository.findByUsername(name);
        UserDto userDto = createUserDto(user);
        return userDto;
    }

    public UserDto createUserDto(User user){
        UserDto userDto = new UserDto();

        userDto.setId(user.getId());
        userDto.setUsername(user.getUsername());
        userDto.setPassword(user.getPassword());
        userDto.setRole(user.getRole());

        return userDto;
    }

}
