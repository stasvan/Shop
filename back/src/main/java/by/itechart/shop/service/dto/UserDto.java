package by.itechart.shop.service.dto;

public class UserDto {

    private Integer id;

    private String role;
    private String email;
    private String password;

    public UserDto() {
    }

    public UserDto(Integer id, String role, String email, String password) {
        this.id = id;
        this.role = role;
        this.email = email;
        this.password = password;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
