package com.iu.gobike.repository;

import com.iu.gobike.model.Rating;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * @author jbhushan
 */
@Repository
public interface RatingRepository extends CrudRepository<Rating, Long> {

}
