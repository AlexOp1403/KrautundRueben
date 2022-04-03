package de.krautundrueben.krautundrueben.repository;


import de.krautundrueben.krautundrueben.models.Customer;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<Customer, Integer> {

}