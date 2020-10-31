package com.iu.gobike.repository;

import com.iu.gobike.model.Restaurant;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @author woboland
 */
@Repository
public interface RestaurantRepository extends CrudRepository<Restaurant, Long> {


    @Query("select r.name from Restaurant r where r.name like ?1%")
    List<String> findAllName(String searchStr);

    @Query("select r from Restaurant r where r.place.name like ?1%")
    List<Restaurant> findAllInCity(String searchStr);

    Restaurant findByName(String name);
}
