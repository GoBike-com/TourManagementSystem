package com.iu.gobike.service;

import com.iu.gobike.dto.BookFlightRequest;
import com.iu.gobike.dto.SearchAirportResponse;
import com.iu.gobike.dto.SearchFlightRequest;
import com.iu.gobike.dto.SearchFlightResponse;

/**
 * @author jbhushan
 */
public interface TravelService {

    Boolean bookFlights(BookFlightRequest request);

}
