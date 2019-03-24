package by.itechart.shop.model;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "address")
public class Address {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private String country;
    private String city;
    private String street;
    private String house;
    private Integer apartment;

    @OneToMany(mappedBy = "address")
    private List<Shop> shops = new ArrayList<Shop>();

//    @OneToMany(mappedBy = "address")
//    private List<User> users = new ArrayList<User>();
//

    public Address() {
    }

    public Address(String country, String city, String street, String house, Integer apartment) {
        this.country = country;
        this.city = city;
        this.street = street;
        this.house = house;
        this.apartment = apartment;
    }

    public Address(String country, String city, String street, String house) {
        this.country = country;
        this.city = city;
        this.street = street;
        this.house = house;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public String getHouse() {
        return house;
    }

    public void setHouse(String house) {
        this.house = house;
    }

    public Integer getApartment() {
        return apartment;
    }

    public void setApartment(Integer apartment) {
        this.apartment = apartment;
    }
}
