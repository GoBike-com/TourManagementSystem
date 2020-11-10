package com.iu.gobike.repository;

import com.iu.gobike.model.Accommodation;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * @author jbhushan
 */
@Repository
public interface AccommodationRepository extends CrudRepository<Accommodation, Long> {

}
