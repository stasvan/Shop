package by.itechart.shop.repository;

import by.itechart.shop.model.Address;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AddressRepository extends JpaRepository<Address, Integer> {

    Address findAddressById(Integer id);
}
