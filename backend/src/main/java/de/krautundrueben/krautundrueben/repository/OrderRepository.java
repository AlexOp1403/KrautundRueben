package de.krautundrueben.krautundrueben.repository;

import de.krautundrueben.krautundrueben.models.Order;
import org.springframework.data.repository.CrudRepository;

public interface OrderRepository extends CrudRepository<Order, Integer> {

}