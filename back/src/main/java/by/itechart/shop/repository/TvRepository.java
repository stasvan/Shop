package by.itechart.shop.repository;

import by.itechart.shop.model.Tv;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface TvRepository extends JpaRepository<Tv, Integer> {

    List<Tv> findAll();
    List<Tv> findTvsByBrandName(String brandName);
    Tv findTvByBrandNameAndModel(String brandName, String model);
    Tv findTvById(Integer id);
    Tv findTvByProductId(Integer productId);

    @Query(value = "select t from Tv t where " +
            "(:brand is null or t.brand.name = :brand) and " +
            "(:year is null or t.year = :year) ")
    List<Tv> findTvsByBrandNameAndYearNamedParams(@Param("brand") String brandName,
                                                  @Param("year") Integer year,
                                                  Pageable pageable
    );
}