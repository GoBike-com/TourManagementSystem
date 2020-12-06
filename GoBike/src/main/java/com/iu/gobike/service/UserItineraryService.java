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
public interface UserItineraryService {

    Boolean book(String userName, String itineraryName);
}
