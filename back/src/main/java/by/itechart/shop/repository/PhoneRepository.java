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
    Phone findPhoneByProductId(Integer productId);

    @Query("select p from Phone p where " +
            "(:brand is null or p.brand.name = :brand) and " +
            "(:ram is null or p.ram = :ram) and " +
            "(:year is null or p.year = :year)")
    List<Phone> findPhonesByBrandNameAndRamAndYearNamedParams(@Param("brand") String brandName,
                           @Param("ram") String ram,
                           @Param("year") Integer year);
}