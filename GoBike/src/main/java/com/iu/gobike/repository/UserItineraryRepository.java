package com.iu.gobike.repository;

import com.iu.gobike.dto.ItineraryDetail;
import com.iu.gobike.model.User;
import com.iu.gobike.model.UserItinerary;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Set;

/**
 * @author jbhushan
 */
@Repository
public interface UserItineraryRepository extends CrudRepository<UserItinerary, Long> {

    List<UserItinerary> findByUserId(Long userId);

    UserItinerary findByUserIdAndItineraryId(Long userId, Long itineraryId);

    UserItinerary findByUserUserNameAndItineraryName(String userName, String name);

    @Query("select u from UserItinerary ui inner join Itinerary i on i.id = ui.itinerary " +
            "inner join User u on u.id = ui.user where i.name = ?1")
    Set<User> findByItineraryName(String name);

    @Query("select u as users, i, ui.flights, ui.accommodations from UserItinerary ui inner join Itinerary i on i.id = ui.itinerary " +
            "inner join User u on u.id = ui.user where u.userName =?1 and i.name = ?2")
    List<ItineraryDetail> findItineraryDetails(String userName, String itineraryName);
}
