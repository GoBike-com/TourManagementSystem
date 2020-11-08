package com.iu.gobike.service;

import com.iu.gobike.dto.AddTravelRequest;
import com.iu.gobike.dto.SearchFlightResponse;
import com.iu.gobike.model.Itinerary;
import com.iu.gobike.model.UserItinerary;

/**
 * @author jbhushan
 */
public interface ItineraryService {

    void addTravel(AddTravelRequest request, String userName);

    UserItinerary getItinerary(String id);
}
