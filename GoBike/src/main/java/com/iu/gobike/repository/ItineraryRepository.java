package com.iu.gobike.repository;

import com.iu.gobike.model.Itinerary;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * @author jbhushan
 */
@Repository
public interface ItineraryRepository extends CrudRepository<Itinerary, Long> {

    Itinerary findByName(String name);

}
