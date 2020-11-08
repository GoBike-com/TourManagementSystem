package com.iu.gobike.repository;

import com.iu.gobike.model.UserItinerary;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @author jbhushan
 */
@Repository
public interface UserItineraryRepository extends CrudRepository<UserItinerary, Long> {

    List<UserItinerary> findByUserId(Long userId);

    UserItinerary findByUserIdAndItineraryId(Long userId, Long itineraryId);
}
