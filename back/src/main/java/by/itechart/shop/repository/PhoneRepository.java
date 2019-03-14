package by.itechart.shop.repository;

import by.itechart.shop.model.Phone;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PhoneRepository extends JpaRepository<Phone, Integer> {

    List<Phone> findAll();
    List<Phone> findPhonesByBrandId(Integer id);

}