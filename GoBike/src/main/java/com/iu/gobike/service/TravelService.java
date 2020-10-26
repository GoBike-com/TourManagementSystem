package com.iu.gobike.service;

import com.iu.gobike.dto.SearchAirportResponse;
import com.iu.gobike.dto.SearchFlightRequest;
import com.iu.gobike.amadeus.dto.SearchFlightAmadeusResponse;

/**
 * @author jbhushan
 */
public interface TravelService {

    SearchAirportResponse searchAirports(String keyword);

    SearchFlightAmadeusResponse searchFlights(SearchFlightRequest request);
}
