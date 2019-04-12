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

    public User getUserById(Integer userId){
        return userRepository.findUserById(userId);
    }

    public UserDto getUserByEmail(String email) {
        User user = userRepository.findByEmail(email);
        UserDto userDto = createUserDto(
                user.getId(),
                user.getEmail(),
                user.getPassword(),
                user.getRole()
        );
        return userDto;
    }

    private User createUser(String email, String password, String role){
        User user = new User();
        user.setEmail(email);
        user.setPassword(password);
        user.setRole(role);
        return user;
    }

    public void saveUserDto(UserDto userDto){
        User user = createUser(
                userDto.getEmail(),
                userDto.getPassword(),
                userDto.getRole()
        );
        saveUser(user);
    }

    private void saveUser(User user){
        userRepository.save(user);
    }

    //with id for GET from front
    public UserDto createUserDto(Integer id, String email, String password, String role){
        UserDto userDto = new UserDto();
        userDto.setId(id);
        userDto.setEmail(email);
        userDto.setPassword(password);
        userDto.setRole(role);
        return userDto;
    }

    //without id for POST from front
    public UserDto createUserDto(String email, String password, String role){
        UserDto userDto = new UserDto();
        userDto.setEmail(email);
        userDto.setPassword(password);
        userDto.setRole(role);
        return userDto;
    }

}
