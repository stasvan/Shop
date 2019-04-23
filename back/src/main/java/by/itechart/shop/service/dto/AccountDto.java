package by.itechart.shop.service.dto;

public class AccountDto {

    private Integer id;

    private String name;
    private String surname;
    private String phone;
    private String avatar;
    private String registrationDate;

    private Integer userId;

    private Integer addressId;

    public AccountDto() {
    }

    public AccountDto(Integer id, String name, String surname, String phone, String avatar,
                      String registrationDate, Integer userId, Integer addressId) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.phone = phone;
        this.avatar = avatar;
        this.registrationDate = registrationDate;
        this.userId = userId;
        this.addressId = addressId;
    }

    public AccountDto(String name, String surname, String phone, String avatar,
                      String registrationDate, Integer userId, Integer addressId) {
        this.name = name;
        this.surname = surname;
        this.phone = phone;
        this.avatar = avatar;
        this.registrationDate = registrationDate;
        this.userId = userId;
        this.addressId = addressId;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getAvatar() {
        return avatar;
    }

    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }

    public String getRegistrationDate() {
        return registrationDate;
    }

    public void setRegistrationDate(String registrationDate) {
        this.registrationDate = registrationDate;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public Integer getAddressId() {
        return addressId;
    }

    public void setAddressId(Integer addressId) {
        this.addressId = addressId;
    }
}
