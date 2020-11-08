package com.iu.gobike.service;

import com.iu.gobike.dto.AddTravelRequest;
import com.iu.gobike.dto.SearchFlightResponse;

/**
 * @author jbhushan
 */
public interface ItineraryService {

    void addTravel(AddTravelRequest request, String userName);
}
