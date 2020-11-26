package com.iu.gobike.service;

import com.iu.gobike.dto.*;
import com.iu.gobike.model.Itinerary;
import com.iu.gobike.model.Plan;
import com.iu.gobike.model.UserItinerary;

import javax.persistence.EntityExistsException;
import java.text.ParseException;

/**
 * @author jbhushan
 */
public interface ItineraryService {

    UserItinerary create(CreateItineraryRequest request, String userName) throws ParseException, EntityExistsException;

    Itinerary addUser(AddUserToItineraryRequest request) throws ParseException;

    void addTravel(AddTravelRequest request, String userName);

    ItineraryDetail getItinerary(String userName, String name);

    GetItineraryDetailsResponse getAllItineraries(String userName);
    Plan savePlan(AddPlanRequest request) throws ParseException;
}
