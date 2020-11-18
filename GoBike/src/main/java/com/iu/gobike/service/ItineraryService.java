package com.iu.gobike.service;

import com.iu.gobike.dto.*;
import com.iu.gobike.model.Itinerary;
import com.iu.gobike.model.UserItinerary;

import java.text.ParseException;
import java.util.List;

/**
 * @author jbhushan
 */
public interface ItineraryService {

    UserItinerary create(CreateItineraryRequest request, String userName) throws ParseException;

    Itinerary addUser(AddUserToItineraryRequest request) throws ParseException;

    void addTravel(AddTravelRequest request, String userName);

    ItineraryDetail getItinerary(String userName, String name);

    GetItineraryDetailsResponse getAllItineraries(String userName);
}
