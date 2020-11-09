package com.iu.gobike.dto;

import com.iu.gobike.model.Flight;
import com.iu.gobike.model.Itinerary;
import com.iu.gobike.model.User;
import lombok.*;

import java.util.List;

/**
 * @author jbhushan
 */
@Setter
@Getter
@RequiredArgsConstructor
@AllArgsConstructor
@Builder
public class ItineraryDetail {

    private Long userItinerary;

    private Itinerary itinerary;

    private List<Flight> flights;

    private List<User> users;

}
