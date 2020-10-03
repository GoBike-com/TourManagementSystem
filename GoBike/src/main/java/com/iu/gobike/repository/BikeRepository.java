package com.iu.gobike.repository;

import com.iu.gobike.model.Bike;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * @author jbhushan
 */
@Repository
public interface BikeRepository extends CrudRepository<Bike, Long> {

}
