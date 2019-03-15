package by.itechart.shop.repository;

import by.itechart.shop.model.Brand;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BrandRepository extends JpaRepository<Brand, Integer> {

    Brand findBrandById(Integer id);
    Brand findBrandByName(String name);

}
