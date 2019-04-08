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

    public UserDto getUserByEmail(String email) {
        User user = userRepository.findByEmail(email);
        UserDto userDto = createUserDto(user);
        return userDto;
    }

    public User createUser(String email, String password, String role){
        User user = new User();

        user.setEmail(email);
        user.setPassword(password);
        user.setRole(role);

        return user;
    }

    public UserDto createUserDto(User user){
        UserDto userDto = new UserDto();

        userDto.setId(user.getId());
        userDto.setEmail(user.getEmail());
        userDto.setPassword(user.getPassword());
        userDto.setRole(user.getRole());

        return userDto;
    }

}
