package com.iu.gobike.service;

import com.iu.gobike.dto.AddTravelRequest;
import com.iu.gobike.dto.BookRequest;

import java.text.ParseException;

/**
 * @author jbhushan
 */
public interface TravelService {

    Boolean bookFlights(BookRequest request);

    void addFlight(AddTravelRequest request, String userName) throws ParseException;

    void deleteFlight(Long id);

}
