package com.iu.gobike.service;

import com.iu.gobike.dto.SearchAirportResponse;
import com.iu.gobike.dto.SearchFlightRequest;
import com.iu.gobike.dto.SearchFlightResponse;

/**
 * @author jbhushan
 */
public interface AmadeusTravelService {

    SearchAirportResponse searchAirports(String keyword);

    SearchFlightResponse searchFlights(SearchFlightRequest request);

}
