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
        User user = userRepository.findUserByEmail(email);
        if (user == null){
            return null;
        }

        UserDto userDto = createUserDto(
                user.getId(),
                user.getEmail(),
                user.getPassword(),
                user.getRole()
        );
        return userDto;
    }

    public Integer getUserIdByEmail(String email){
        return userRepository.findUserByEmail(email).getId();
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

    //with id for GET
    public UserDto createUserDto(Integer id, String email, String password, String role){
        UserDto userDto = new UserDto();
        userDto.setId(id);
        userDto.setEmail(email);
        userDto.setPassword(password);
        userDto.setRole(role);
        return userDto;
    }

    //without id for POST
    public UserDto createUserDto(String email, String password, String role){
        UserDto userDto = new UserDto();
        userDto.setEmail(email);
        userDto.setPassword(password);
        userDto.setRole(role);
        return userDto;
    }

    public String validateUserData(String role, String email, String password){
        String message = "ok";

        if ((email.length() < 8) || (email.length() > 36)) {
            message = "Bad email, symbols range 8-36";
            return message;
        }

        if ((password.length() < 6) || (password.length() > 36)) {
            message = "Bad password, symbols range 6-36";
            return message;
        }

        if (!role.equals("admin") && !role.equals("user")) {
            message = "Bad role";
            return message;
        }

        return message;
    }

    public String verifyEmail(String email){
        String message = "ok";

        if (getUserByEmail(email) != null) {
            message = "Email already exists";
            return message;
        }

        return message;
    }

}
