package by.itechart.shop.repository;

import by.itechart.shop.model.Laptop;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface LaptopRepository extends JpaRepository<Laptop, Integer> {

    List<Laptop> findAll();
    List<Laptop> findLaptopByBrandName(String name);

    Laptop findLaptopByBrandNameAndModel(String brandName, String model);
    Laptop findLaptopById(Integer id);
    Laptop findLaptopByProductId(Integer productId);

    @Query(value = "select l from Laptop l where " +
            "(:brand is null or l.brand.name = :brand) and " +
            "(:ram is null or l.ram = :ram) and " +
            "(:year is null or l.year = :year) "
    )
    List<Laptop> findLaptopsByBrandNameAndRamAndYearNamedParams(@Param("brand") String brandName,
                                                              @Param("ram") String ram,
                                                              @Param("year") Integer year,
                                                              Pageable pageable
    );
}