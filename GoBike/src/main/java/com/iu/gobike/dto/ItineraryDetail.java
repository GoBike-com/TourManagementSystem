package com.iu.gobike.dto;

import com.iu.gobike.model.Accommodation;
import com.iu.gobike.model.Flight;
import com.iu.gobike.model.Itinerary;
import com.iu.gobike.model.User;
import lombok.*;

import java.util.List;
import java.util.Set;

/**
 * @author jbhushan
 */
@Setter
@Getter
@RequiredArgsConstructor
@AllArgsConstructor
@Builder
public class ItineraryDetail {

    private Itinerary itinerary;

    private List<Flight> flights;

    private List<Accommodation> accommodations;

    private Set<User> users;

}
