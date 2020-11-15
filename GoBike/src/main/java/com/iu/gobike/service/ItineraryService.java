package com.iu.gobike.service;

import com.iu.gobike.dto.AddTravelRequest;
import com.iu.gobike.dto.CreateItineraryRequest;
import com.iu.gobike.dto.GetItineraryDetailsResponse;
import com.iu.gobike.model.UserItinerary;

/**
 * @author jbhushan
 */
public interface ItineraryService {

    UserItinerary create(CreateItineraryRequest request, String userName);

    void addTravel(AddTravelRequest request, String userName);

    UserItinerary getItinerary(String id);

    GetItineraryDetailsResponse getAllItineraries(String userName);
}
