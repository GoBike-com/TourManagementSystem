package com.iu.gobike.repository;

import com.iu.gobike.model.Place;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @author jbhushan
 */
@Repository
public interface PlaceRepository extends CrudRepository<Place, Long> {

    @Query("select p.name from Place p where p.name like ?1%")
    List<String> findAllName(String searchStr);

    Place findByName(String name);
}
