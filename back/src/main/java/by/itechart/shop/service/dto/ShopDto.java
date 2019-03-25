package by.itechart.shop.service.dto;

public class ShopDto {

    private Integer id;

    private UserDto user;

    private AddressDto address;

    private String name;
    private String phoneNumber;
    private String description;
    private String imageName;

    public ShopDto() {
    }

    public ShopDto(Integer id, UserDto user, AddressDto address,
                   String name, String phoneNumber, String description,
                   String imageName) {
        this.id = id;
        this.user = user;
        this.address = address;
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.description = description;
        this.imageName = imageName;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public UserDto getUser() {
        return user;
    }

    public void setUser(UserDto user) {
        this.user = user;
    }

    public AddressDto getAddress() {
        return address;
    }

    public void setAddress(AddressDto address) {
        this.address = address;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImageName() {
        return imageName;
    }

    public void setImageName(String imageName) {
        this.imageName = imageName;
    }
}
