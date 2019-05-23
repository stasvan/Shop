package by.itechart.shop.repository;

import by.itechart.shop.model.Account;
import by.itechart.shop.model.Brand;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AccountRepository extends JpaRepository<Account, Integer> {

    Account findByUserId(Integer userId);
}
