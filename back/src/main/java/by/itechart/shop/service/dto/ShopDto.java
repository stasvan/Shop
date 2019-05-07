package by.itechart.shop.service.dto;

public class ShopDto {

    private Integer id;

    private Integer userId;

    private AddressDto address;

    private String name;
    private String phoneNumber;
    private String description;
    private String imageName;

    public ShopDto() {
    }

    public ShopDto(Integer id, Integer userId, AddressDto address,
                   String name, String phoneNumber, String description,
                   String imageName) {
        this.id = id;
        this.userId = userId;
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

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
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
