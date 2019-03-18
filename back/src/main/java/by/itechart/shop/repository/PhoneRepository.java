package by.itechart.shop.repository;

import by.itechart.shop.model.Phone;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PhoneRepository extends JpaRepository<Phone, Integer> {

    List<Phone> findAll();
    List<Phone> findPhonesByBrandName(String name);
    Phone findPhoneById(Integer id);


}