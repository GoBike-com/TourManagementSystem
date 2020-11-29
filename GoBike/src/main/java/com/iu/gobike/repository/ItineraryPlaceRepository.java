package com.iu.gobike.repository;

import com.iu.gobike.model.ItineraryPlace;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * @author jbhushan
 */
@Repository
public interface ItineraryPlaceRepository extends CrudRepository<ItineraryPlace, Long> {

}
