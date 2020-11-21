package com.iu.gobike.repository;

import org.springframework.data.repository.CrudRepository;
import com.iu.gobike.model.Flight;
import org.springframework.stereotype.Repository;

/**
 * @author jbhushan
 */
@Repository
public interface FlightRepository extends CrudRepository<Flight, Long> {

}
