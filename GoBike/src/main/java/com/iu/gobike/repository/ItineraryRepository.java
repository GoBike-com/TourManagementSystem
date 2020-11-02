package com.iu.gobike.repository;

import com.iu.gobike.model.Itinerary;
import org.springframework.data.repository.CrudRepository;

/**
 * @author jbhushan
 */
public interface ItineraryRepository extends CrudRepository<Itinerary, Long> {

}
